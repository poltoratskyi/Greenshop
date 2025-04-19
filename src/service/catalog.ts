import { AxiosInstance } from "./axios";
import { Item } from "../types";

export const fetchCatalog = async (params: {
  category?: number[];
  size?: number[];
  sort?: string;
  direction?: string;
}): Promise<Item[]> => {
  const requestParams: {
    category?: string;
    size?: string;
    sort?: string;
    direction?: string;
  } = {};

  if (params.category?.length) {
    requestParams.category = params.category.join(",");
  }

  if (params.size?.length) {
    requestParams.size = params.size.join(",");
  }

  if (params.sort) {
    requestParams.sort = params.sort;
  }

  if (params.direction) {
    requestParams.direction = params.direction;
  }

  const response = await AxiosInstance.get<Item[]>("/items/catalog", {
    params: requestParams,
  });

  return response.data;
};
