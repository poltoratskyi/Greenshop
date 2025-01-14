import { AxiosInstance } from "./axios";

import { QuantityItemsCategory } from "../types";

export const fetchCategory = async (): Promise<QuantityItemsCategory[]> => {
  const response = await AxiosInstance.get<QuantityItemsCategory[]>(
    "/category"
  );
  return response.data;
};
