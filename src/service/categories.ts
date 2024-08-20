import { Category } from "@prisma/client";
import { AxiosInstance } from "./axios";

export const axiosCategories = async () => {
  try {
    const response = await AxiosInstance.get<Category[]>("/categories");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
