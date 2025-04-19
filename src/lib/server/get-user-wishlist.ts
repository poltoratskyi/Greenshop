import { prisma } from "@/prisma/prisma-client";

export async function getUserWishlist(id: number) {
  try {
    if (!id) {
      throw new Error("User ID is required");
    }

    return await prisma.wishlist.findFirst({
      where: {
        userId: id,
      },

      select: {
        id: true,
        createdAt: true,

        items: {
          orderBy: {
            createdAt: "desc",
          },

          select: {
            id: true,

            itemId: true,
            variationId: true,

            item: {
              select: {
                id: true,
                imgUrl: true,
                name: true,
                sku: true,
                popularity: true,

                categoryId: true,

                variations: {
                  select: {
                    id: true,
                    price: true,
                    sale: true,
                    onSale: true,
                    stock: true,
                    isAvailable: true,

                    size: {
                      select: {
                        id: true,
                        shortName: true,
                        fullName: true,
                      },
                    },
                  },
                },

                category: {
                  select: {
                    id: true,

                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw new Error("Error fetching wishlist");
  }
}
