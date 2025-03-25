import { prisma } from "../../prisma/prisma-client";

export const getOrCreateUserCart = async (token: string) => {
  try {
    let userCart = await prisma.cart.findFirst({
      where: {
        token,
      },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          token,
        },
      });
    }

    return userCart;
  } catch (error) {
    console.error("Error in getOrCreateUserCart:", error);
    throw new Error("Failed to get or create user cart");
  }
};
