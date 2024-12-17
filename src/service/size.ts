import { Size } from "../types";
import { AxiosInstance } from "./axios";

export const fetchSize = async (): Promise<Size[]> => {
  const response = await AxiosInstance.get<Size[]>("/size");
  return response.data;
};
