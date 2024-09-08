import { AxiosInstance } from "./axios";

import { Category } from "../types";

export const axiosCategories = async () => {
  const response = await AxiosInstance.get<Category[]>("/categories");

  return response.data;
};
