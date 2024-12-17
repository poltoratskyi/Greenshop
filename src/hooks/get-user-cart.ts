import { prisma } from "../prisma/prisma-client";

export async function getUserCart(token: string) {
  return prisma.cart.findFirst({
    where: {
      token,
    },

    select: {
      id: true,

      subTotalAmount: true,
      totalAmount: true,
      token: true,
      userId: true,

      items: {
        orderBy: {
          itemId: "asc",
        },

        select: {
          id: true,

          quantity: true,
          itemId: true,
          variationId: true,

          item: {
            select: {
              id: true,

              imgUrl: true,
              name: true,
              tags: true,
              sku: true,
              categoryId: true,

              variations: {
                select: {
                  id: true,

                  price: true,
                  sale: true,
                  onSale: true,
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
}
