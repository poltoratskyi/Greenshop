"use client";

import { ItemVariation } from "../types/item";
import { useCartStore, useUIStore } from "../store";

export const useAddToCart = () => {
  const addItemCart = useCartStore((state) => state.addItemCart);
  const setSelectedItemSizeId = useUIStore(
    (state) => state.setSelectedItemSizeId
  );

  const handleAddToCart = async (
    id: number,
    sizeIndex: number,
    variations: ItemVariation[]
  ) => {
    try {
      const variation = variations[sizeIndex];

      setSelectedItemSizeId(variation.sizeId);

      await addItemCart({
        itemId: id,
        variationId: variation.sizeId,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return { handleAddToCart };
};
