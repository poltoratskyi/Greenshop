import { prisma } from "../../prisma/prisma-client";

export const getOrCreateUserCart = async (token: string, userId?: number) => {
  try {
    if (!token) {
      throw new Error("Cart token is required");
    }

    let userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }, { userId }],
      },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          token,
          userId,
        },
      });
    }

    return userCart;
  } catch (error) {
    console.error("Error in getOrCreateUserCart:", error);
    throw new Error("Failed to get or create user cart");
  }
};
