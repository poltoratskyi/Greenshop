import { Item } from "../types";
import { AxiosInstance } from "./axios";

export const axiosItem = async (query: string) => {
  const response = await AxiosInstance.get<Item[]>("/items/search", {
    params: { query },
  });

  return response.data;
};
