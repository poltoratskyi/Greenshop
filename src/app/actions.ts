"use server";

import { ProfileFormFields, SignUpFormFields } from "@/schemas";
import { getUserSession, subscribe } from "../lib/server";
import { prisma } from "../prisma/prisma-client";
import { Email } from "../types/common";
import { hashSync } from "bcrypt";

export const createSubscription = async (data: Email) => {
  try {
    const { email } = data;

    if (!email) {
      throw new Error("Email is required");
    }

    const existingSubscription = await prisma.emailSubscription.findFirst({
      where: {
        email: email,
      },
    });

    if (existingSubscription) {
      return {
        success: false,
      };
    }

    await prisma.emailSubscription.create({
      data: {
        email: email,
      },
    });

    subscribe(email);

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while processing your subscription");
  }
};

export const updateUserProfile = async (data: ProfileFormFields) => {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("User not found");
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        id: currentUser.id,
      },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    let hashedPassword;

    if (data?.newPassword) {
      hashedPassword = hashSync(data.newPassword, 10);
    }

    await prisma.user.update({
      where: { id: currentUser.id },

      data: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        phone: data?.phone,
        email: data?.email,
        password: hashedPassword || existingUser.password,
      },
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const registerUser = async (data: SignUpFormFields) => {
  try {
    const { firstName, email, password, repeatPassword } = data;

    if (!firstName || !email || !password || !repeatPassword) {
      return { success: false, error: "Missing required fields" };
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    await prisma.user.create({
      data: {
        firstName: data.firstName,
        email: data.email,
        password: hashSync(data.password, 10),
      },
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(`Failed to register user: ${error.message}`);
    }
    throw new Error("An unexpected error occurred");
  }
};
