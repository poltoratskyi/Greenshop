import { Item } from "../types";
import { AxiosInstance } from "./axios";

export const fetchCatalog = async (): Promise<Item[]> => {
  const response = await AxiosInstance.get<Item[]>("/items/catalog");
  return response.data;
};
