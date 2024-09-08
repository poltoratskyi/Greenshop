import { Item } from "../types";
import { AxiosInstance } from "./axios";

export const axiosCatalog = async () => {
  const response = await AxiosInstance.get<Item[]>("items/catalog");

  return response.data;
};
