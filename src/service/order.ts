import { AxiosInstance } from "./axios";
import { Order } from "../types";

export const createOrder = async (data: Order): Promise<Order> => {
  const response = await AxiosInstance.post<Order>("/order", data);
  return response.data;
};
