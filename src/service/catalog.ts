import { Item } from "../types";
import { AxiosInstance } from "./axios";

export const axiosCatalog = async () => {
  try {
    const response = await AxiosInstance.get<Item[]>("items/catalog");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
