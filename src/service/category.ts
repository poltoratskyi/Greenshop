import { AxiosInstance } from "./axios";

import { Category } from "../types";

export const fetchCategory = async (): Promise<Category[]> => {
  const response = await AxiosInstance.get<Category[]>("/category");
  return response.data;
};
