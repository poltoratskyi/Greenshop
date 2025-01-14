import { CartItem, CartResponse, CartItemVariation } from "../types";
import { getSingleItemPrice } from "../hooks";

interface CartDetails {
  subtotalAmount: number;
  totalAmount: number;

  cartItems: CartItem[];
}

export const responseData = (data: CartResponse): CartDetails => {
  const cartItems = data.items.map((i) => ({
    id: i.id,

    quantity: i.quantity,
    singleItemPrice: getSingleItemPrice(i),
    name: i.item.name,
    imgUrl: i.item.imgUrl,
    sku: i.item.sku,
    itemId: i.itemId,
    variationId: i.variationId - 1,

    variations: i.item.variations.map((variation: CartItemVariation) => ({
      id: variation.id,
      price: variation.price,
      sale: variation.sale,
      onSale: variation.onSale,

      size: {
        shortName: variation.size.shortName,
      },
    })),

    category: {
      id: i.item.category.id,
      name: i.item.category.name,
    },
  }));

  return {
    cartItems,
    totalAmount:
      data.totalAmount > 0 ? data.totalAmount + 16 : (data.totalAmount = 0),
    subtotalAmount: data.totalAmount,
  };
};
