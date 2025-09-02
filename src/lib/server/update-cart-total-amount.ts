import { prisma } from "../../prisma/prisma-client";
import { getUserCart } from "./get-user-cart";

export const updateCartTotalAmount = async (token: string) => {
  try {
    const userCart = await getUserCart(token);

    if (!userCart) {
      return;
    }

    const totalAmount = userCart.items.reduce((acc, i) => {
      const onSale = i.item.variations[i.variationId - 1].onSale;
      const price = i.item.variations[i.variationId - 1]?.price;
      const sale = i.item.variations[i.variationId - 1]?.sale;

      return onSale ? acc + i.quantity * sale : acc + i.quantity * price;
    }, 0);

    return await prisma.cart.update({
      where: {
        token: userCart.token,
      },

      data: {
        subTotalAmount: totalAmount,
        totalAmount: totalAmount,
      },

      select: {
        id: true,

        subTotalAmount: true,
        totalAmount: true,
        token: true,
        userId: true,

        items: {
          orderBy: {
            createdAt: "desc",
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
                        shortName: true,
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
    console.error("Error updating cart total amount:", error);
  }
};
