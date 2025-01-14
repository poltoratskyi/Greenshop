import { ItemSize } from "../types";
import { AxiosInstance } from "./axios";

export const fetchSize = async (): Promise<ItemSize[]> => {
  const response = await AxiosInstance.get<ItemSize[]>("/size");
  return response.data;
};
