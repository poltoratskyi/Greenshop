import { Size } from "../types";
import { AxiosInstance } from "./axios";

export const axiosSize = async () => {
  const response = await AxiosInstance.get<Size[]>("/size");

  return response.data;
};
