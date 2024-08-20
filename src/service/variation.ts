import { AxiosInstance } from "./axios";

type Variation = {
  id: number;
  price: number;
  sailPrice: number;
  value: number;
  onSale: boolean;
  sizeId: number;
  itemId: number;
  createdAt: Date;
  updatedAt: Date;
};

export const axiosVariation = async () => {
  try {
    const response = await AxiosInstance.get<Variation[]>("/variation");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
