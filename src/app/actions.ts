"use server";

import {
  ProfileAccountDetailsFormFields,
  SignUpFormFields,
  ProfileAddressFormFields,
} from "@/schemas";
import {
  getUserCart,
  getUserSession,
  sendOrderEmail,
  subscribe,
} from "../lib/server";
import { prisma } from "../prisma/prisma-client";
import { Email } from "../types/common";
import { compare, hashSync } from "bcrypt";
import { cookies } from "next/headers";
import { CartItemVariation, Order } from "@/types";

export const createSubscription = async (data: Email) => {
  try {
    const { email } = data;

    if (!email) {
      throw new Error("Email is required");
    }

    const existingSubscription = await prisma.emailSubscription.findUnique({
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

export const registerUser = async (data: SignUpFormFields) => {
  try {
    const { firstName, email, password, repeatPassword } = data;

    if (!firstName || !email || !password || !repeatPassword) {
      return { success: false, error: "Missing required fields" };
    }

    const existingUser = await prisma.user.findUnique({
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

export const updateUserProfile = async (
  data: ProfileAccountDetailsFormFields
) => {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      return {
        success: false,
        error: "User not found",
      };
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: currentUser.email as string,
      },
    });

    if (!existingUser) {
      return {
        success: false,
        error: "User not found",
      };
    }

    let hashedPassword = existingUser.password;
    let passwordUpdated = false;

    if (data.newPassword) {
      const isPasswordSame = await compare(
        data.newPassword,
        existingUser.password || ""
      );

      if (isPasswordSame) {
        return {
          success: false,
          error: "New password must be different from current password",
          passwordUpdated: false,
        };
      }

      hashedPassword = hashSync(data.newPassword, 10);
      passwordUpdated = true;
    }

    await prisma.user.update({
      where: { email: currentUser.email as string },
      data: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        phone: data?.phone,
        email: data?.email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      error: null,
      passwordUpdated,
      message: passwordUpdated
        ? "Profile and password updated successfully"
        : "Profile updated successfully",
    };
  } catch (error) {
    console.error("Update profile error:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
      passwordUpdated: false,
    };
  }
};

export const updateUserAddress = async (data: ProfileAddressFormFields) => {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      return {
        success: false,
        error: "User not found",
      };
    }

    await prisma.user.update({
      where: { email: currentUser.email as string },
      data: {
        country: data?.country,
        city: data?.city,
        address: data?.address,
        apartment: data?.apartment,
        state: data?.state,
      },
    });

    return {
      success: true,
      error: null,
      message: "Address updated successfully",
    };
  } catch (error) {
    console.error("Update address error:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
