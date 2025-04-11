import { prisma } from "../../prisma/prisma-client";

export const getOrCreateUserWishlist = async (id: number) => {
  try {
    if (!id) {
      throw new Error("User ID is required");
    }

    let userWishlist = await prisma.wishlist.findFirst({
      where: {
        userId: id,
      },
    });

    if (!userWishlist) {
      userWishlist = await prisma.wishlist.create({
        data: {
          userId: id,
        },
      });
    }

    return userWishlist;
  } catch (error) {
    console.error("Error in getOrCreateUserWishlist:", error);
    throw new Error("Failed to get or create user wishlist");
  }
};
