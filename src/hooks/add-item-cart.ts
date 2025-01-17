"use client";

import { ItemVariation } from "../types/item";
import { useCartStore, useUIStore } from "../store";

export const useAddItemCart = () => {
  const addItemCart = useCartStore((state) => state.addItemCart);
  const setSelectedItemSizeId = useUIStore(
    (state) => state.setSelectedItemSizeId
  );

  const handleAddToCart = async (
    id: number,
    sizeId: number,
    variations: ItemVariation[]
  ) => {
    try {
      const variation = variations[sizeId - 1];

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
