import { AxiosInstance } from "./axios";
import { Order } from "../types";

export const fetchUserOrder = async (): Promise<Order> => {
  const response = await AxiosInstance.get<Order>("/order");
  return response.data;
};

export const createOrder = async (orderData: Order): Promise<Order> => {
  const response = await AxiosInstance.post<Order>("/order", orderData);
  return response.data;
};
