import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../prisma/prisma-client";
import { compare } from "bcrypt";
import { UserRole } from "../../types";

export const authOptions: NextAuthOptions = {
  providers: [
    // GitHub OAuth
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      // Get the user profile
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: "USER" as UserRole,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      // Get the user profile
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name || profile.login,
          email: profile.email,
          image: profile.picture,
          role: "USER" as UserRole,
        };
      },
    }),

    // Email and Password OAuth
    CredentialsProvider({
      name: "Credentials",
      // The credentials is used to authenticate the user
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      // Check if the provided credentials are valid
      async authorize(credentials) {
        try {
          if (!credentials) {
            throw new Error("Credentials are required");
          }

          // Destructure the credentials
          const { email, password } = credentials;

          if (!email || !password) {
            throw new Error("Email are required");
          }

          // Check if the user exists
          const user = await prisma.user.findFirst({
            where: { email },
          });

          if (!user) {
            throw new Error("User not found");
          }

          // Check if the password is correct
          const isValidPassword = await compare(password, user.password || "");

          if (!isValidPassword) {
            throw new Error("Invalid password");
          }

          // Check if the user is verified -> in development
          /*  if (!user.verified) {
            throw new Error("User not verified");
          } */

          return {
            id: user.id,
            email: user.email,
            name: user.firstName,
            role: user.role,
          };
        } catch (error) {
          console.error("Error in authorize:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],

  // Secret key for JWT
  secret: process.env.NEXTAUTH_SECRET,

  // Session configuration
  session: {
    strategy: "jwt",
  },

  callbacks: {
    // Check if the user is authenticated and return true or false
    async signIn({ user, account }) {
      try {
        // If the user is logging in with credentials
        if (account?.provider === "credentials") {
          return true;
        }

        // If the user is logging in with OAuth
        if (!user.email || !account?.provider || !account?.providerAccountId) {
          return false;
        }

        // Check if the user already exists
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              {
                provider: account?.provider,
                providerId: account?.providerAccountId,
              },

              {
                email: user.email,
              },
            ],
          },
        });

        // If the user already exists, update their provider and providerId
        if (existingUser) {
          await prisma.user.update({
            where: {
              id: existingUser.id,
            },

            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          });

          return true;
        }

        // If the user doesn't exist, create a new user
        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              provider: account?.provider,
              providerId: account?.providerAccountId,
              verified: new Date(),
              firstName: user.name || "User #" + user.id,
              role: "USER" as UserRole,
            },
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    // JWT callback
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.role = user.role;
        }

        return token;
      } catch (error) {
        console.error("Error in jwt callback:", error);
        return token;
      }
    },

    // Session callback
    async session({ session, token }) {
      try {
        if (session.user) {
          session.user.id = token.id as number;
          session.user.role = token.role as UserRole;
        }

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
};
