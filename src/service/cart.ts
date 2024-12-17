import { CartResponse, postCartItem } from "../types";
import { AxiosInstance } from "./axios";

export const fetchUserCart = async (): Promise<CartResponse> => {
  const response = await AxiosInstance.get<CartResponse>("/cart");
  return response.data;
};

export const updateCartItemQuantity = async (
  id: number,
  quantity: number
): Promise<CartResponse> => {
  const response = await AxiosInstance.patch<CartResponse>(`/cart/` + id, {
    quantity,
  });

  return response.data;
};

export const deleteCartItem = async (id: number): Promise<CartResponse> => {
  const response = await AxiosInstance.delete<CartResponse>(`/cart/` + id);
  return response.data;
};

export const addCartItem = async (
  item: postCartItem
): Promise<CartResponse> => {
  const response = await AxiosInstance.post<CartResponse>(`/cart/`, item);
  return response.data;
};
