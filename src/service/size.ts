import { Size } from "../types";
import AxiosInstance from "./axios";

const axiosSize = async () => {
  const response = await AxiosInstance.get<Size[]>("/size");

  return response.data;
};

export default axiosSize;
