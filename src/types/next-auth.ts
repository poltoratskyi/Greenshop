import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    role: string;
    email: string;
  }

  interface Session {
    user: {
      id: number;
      role: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: number;
    role: string;
  }
}
