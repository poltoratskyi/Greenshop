import { Variation } from "../types";
import { AxiosInstance } from "./axios";

export const fetchVariation = async (): Promise<Variation[]> => {
  const response = await AxiosInstance.get<Variation[]>("/variation");
  return response.data;
};
