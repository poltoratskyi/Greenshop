import { Item } from "../types";
import AxiosInstance from "./axios";

const axiosCatalog = async () => {
  const response = await AxiosInstance.get<Item[]>("items/catalog");

  return response.data;
};

export default axiosCatalog;
