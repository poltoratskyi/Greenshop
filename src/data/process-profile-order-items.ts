import { CartItemVariation, OrderItem, OrderItems } from "../types";

export const processProfileOrderItems = (data: OrderItems[]) => {
  return data.map((i: OrderItems) => ({
    id: i.id,
    createdAt: i.createdAt,
    status: i.status,
    totalAmount: i.totalAmount,

    items: i.items.map((item: OrderItem) => ({
      id: item.id,
      quantity: item.quantity,
      variationId: item.variationId - 1,

      item: {
        id: item.item.id,
        name: item.item.name,
        imgUrl: item.item.imgUrl,

        variations: item.item.variations.map(
          (variation: CartItemVariation) => ({
            id: variation.id,
            price: variation.price,
            sale: variation.sale,
            onSale: variation.onSale,
            sizeId: variation.sizeId,

            size: {
              id: variation.size.id,
              shortName: variation.size.shortName,
              fullName: variation.size.fullName,
            },
          })
        ),
      },
    })),
  }));
};
