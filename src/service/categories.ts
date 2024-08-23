import { AxiosInstance } from "./axios";

import { Category } from "../types";

export const axiosCategories = async () => {
  try {
    const response = await AxiosInstance.get<Category[]>("/categories");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
