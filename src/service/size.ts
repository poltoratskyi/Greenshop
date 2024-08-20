import { Category, Size } from "@prisma/client";
import { AxiosInstance } from "./axios";

export const axiosSize = async () => {
  try {
    const response = await AxiosInstance.get<Size[]>("/size");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
