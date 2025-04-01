// getOrdersWithItems.ts

import { prisma } from "@/prisma/prisma-client";

export const getOrderItems = async (email: string) => {
  return await prisma.order.findMany({
    where: {
      user: {
        email: email as string,
      },
    },

    orderBy: { createdAt: "desc" },

    select: {
      id: true,

      createdAt: true,
      status: true,
      totalAmount: true,

      items: {
        select: {
          id: true,

          orderId: true,
          variationId: true,
          quantity: true,

          item: {
            select: {
              id: true,

              imgUrl: true,
              name: true,

              variations: {
                select: {
                  id: true,

                  price: true,
                  sale: true,
                  onSale: true,

                  sizeId: true,

                  size: {
                    select: {
                      id: true,

                      shortName: true,
                      fullName: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
};
