import { Variation } from "../types";
import AxiosInstance from "./axios";

const axiosVariation = async () => {
  const response = await AxiosInstance.get<Variation[]>("/variation");

  return response.data;
};

export default axiosVariation;
