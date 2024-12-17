import { CartSingleItemPrice } from "../types";

export const getSingleItemPrice = (i: CartSingleItemPrice): number => {
  const variation = i.item.variations[i.variationId - 1];
  const price = variation.onSale ? variation.sale : variation.price;

  return i.quantity * price;
};
