import { WishlistResponse } from "@/types";
import { AxiosInstance } from "./axios";

export const fetchUserWishlist = async (): Promise<WishlistResponse> => {
  const response = await AxiosInstance.get<WishlistResponse>("/wishlist");
  return response.data;
};

export const deleteWishlistItem = async (
  itemId: number
): Promise<WishlistResponse> => {
  const response = await AxiosInstance.delete<WishlistResponse>(
    `/wishlist/` + itemId
  );

  return response.data;
};
