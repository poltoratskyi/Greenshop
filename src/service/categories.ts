import AxiosInstance from "./axios";

import { Category } from "../types";

const axiosCategories = async () => {
  const response = await AxiosInstance.get<Category[]>("/categories");

  return response.data;
};

export default axiosCategories;
