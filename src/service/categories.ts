import { AxiosInstance } from "./axios";

type Category = {
  id: number;
  name: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
};

export const axiosCategories = async () => {
  try {
    const response = await AxiosInstance.get<Category[]>("/categories");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
