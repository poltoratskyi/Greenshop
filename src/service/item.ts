import { AxiosInstance } from "./axios";
import { Item } from "../types";

export const fetchSingleItem = async (itemId: number): Promise<Item[]> => {
  const response = await AxiosInstance.get<Item[]>(`/items/item/` + itemId);

  return response.data;
};
