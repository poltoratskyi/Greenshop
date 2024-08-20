import { Variation } from "@prisma/client";
import { AxiosInstance } from "./axios";

export const axiosVariation = async () => {
  try {
    const response = await AxiosInstance.get<Variation[]>("/variation");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
