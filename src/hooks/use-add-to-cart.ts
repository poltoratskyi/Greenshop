"use client";

import { ItemVariation } from "../types/item";
import { useCartStore, useUIStore } from "../store";
import { useToast } from ".";

export const useAddToCart = () => {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const setSelectedItemSizeId = useUIStore(
    (state) => state.setSelectedItemSizeId
  );
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);

  const { showToast } = useToast();

  const handleAddToCart = async (
    id: number,
    sizeIndex: number,
    variations: ItemVariation[]
  ) => {
    try {
      const variation = variations[sizeIndex];

      setSelectedItemSizeId(variation.sizeId);

      await addCartItem({
        itemId: id,
        variationId: variation.sizeId,
      });

      await showToast("Item successfully added to your cart", true);

      setIsModalSizeOpen(false);

      window.scrollTo({ top: 0 });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return { handleAddToCart };
};
