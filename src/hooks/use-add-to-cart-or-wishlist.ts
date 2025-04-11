"use client";

import { useRouter } from "next/navigation";
import { useAddToCart, useAddToWishlist } from "./";
import { ItemVariation } from "@/types";

export const useAddToCartOrWishlist = () => {
  const router = useRouter();

  const { handleAddToCart } = useAddToCart();
  const { handleAddToWishlist } = useAddToWishlist();

  const handleAdd = async (
    id: number,
    sizeId: number,
    variations: ItemVariation[],
    openedModalType: boolean
  ) => {
    if (openedModalType) {
      await handleAddToCart(id, sizeId - 1, variations);
      router.push("/cart");
    } else {
      await handleAddToWishlist(id, sizeId - 1, variations);
    }
  };

  return { handleAdd };
};
