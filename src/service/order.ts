import { AxiosInstance } from "./axios";
import { Order } from "../types";

export const fetchUserOrder = async (data: string): Promise<Order> => {
  const response = await AxiosInstance.get<Order>("/order", {
    params: { email: data },
  });
  return response.data;
};

export const createOrder = async (data: Order): Promise<Order> => {
  const response = await AxiosInstance.post<Order>("/order", data);
  return response.data;
};
