import { AxiosInstance } from "./axios";
import { Item } from "../types";

export const fetchCatalog = async (params: {
  category?: number[];
  price_from?: number;
  price_to?: number;
  size?: number[];
  sort?: string;
  direction?: string;
}): Promise<Item[]> => {
  const requestParams: {
    category?: string;
    price_from?: number;
    price_to?: number;
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

  if (params.price_from) {
    requestParams.price_from = params.price_from;
  }

  if (params.price_to) {
    requestParams.price_to = params.price_to;
  }

  const response = await AxiosInstance.get<Item[]>("/items/catalog", {
    params: requestParams,
  });

  return response.data;
};
