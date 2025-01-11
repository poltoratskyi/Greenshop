import { AxiosInstance } from "./axios";
import { Item } from "../types";

export const fetchSingleItem = async (id: number): Promise<Item[]> => {
  const response = await AxiosInstance.get<Item[]>(`/item/` + id);

  return response.data;
};
