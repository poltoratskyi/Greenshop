"use client";

import { useCartStore } from "../store";

export type QuantityType = "decrement" | "increment";

export const useChangeQuantityItems = () => {
  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity
  );

  const changeQuantityItems = (
    id: number,
    quantity: number,
    type: QuantityType
  ) => {
    if (type === "decrement" && quantity <= 1) {
      return;
    }

    const newQuantity = type === "decrement" ? quantity - 1 : quantity + 1;

    updateCartItemQuantity(id, newQuantity);
  };

  return { changeQuantityItems };
};
