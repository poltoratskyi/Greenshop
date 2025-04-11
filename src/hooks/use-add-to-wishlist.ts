"use client";

import { ItemVariation } from "../types/item";
import { addWishlistItem } from "../app/actions";
import { useToast } from ".";
import { useUIStore } from "@/store";

export const useAddToWishlist = () => {
  const setSelectedItemSizeId = useUIStore(
    (state) => state.setSelectedItemSizeId
  );
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);
  const setIsLoading = useUIStore((state) => state.setIsLoading);

  const { showToast } = useToast();

  const handleAddToWishlist = async (
    id: number,
    sizeIndex: number,
    variations: ItemVariation[]
  ) => {
    try {
      setIsLoading(true);

      const variation = variations[sizeIndex];

      setSelectedItemSizeId(variation.sizeId);

      const response = await addWishlistItem({
        itemId: id,
        variationId: variation.sizeId,
      });

      if (!response.success) {
        setIsLoading(false);

        return await showToast(
          response.error || "Item already in wishlist",
          false
        );
      }

      await showToast(
        response.message || "Item successfully added to your favorites",
        true
      );

      setIsModalSizeOpen(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      setIsLoading(false);
    }
  };

  return { handleAddToWishlist };
};
