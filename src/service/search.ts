import { Item } from "../types";
import { AxiosInstance } from "./axios";

export const fetchSearchItem = async (query: string): Promise<Item[]> => {
  const response = await AxiosInstance.get<Item[]>("/items/search", {
    params: { query },
  });
  return response.data;
};
