import { Item } from "@prisma/client";
import { AxiosInstance } from "./axios";

export const axiosItem = async (query: string) => {
  try {
    const response = await AxiosInstance.get<Item[]>("/items/search", {
      params: { query },
    });

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
