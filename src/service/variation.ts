import { QuantityItemsSize } from "../types";
import { AxiosInstance } from "./axios";

export const fetchVariation = async (): Promise<QuantityItemsSize[]> => {
  const response = await AxiosInstance.get<QuantityItemsSize[]>("/variation");
  return response.data;
};
