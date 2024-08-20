import { AxiosInstance } from "./axios";

type Size = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export const axiosSize = async () => {
  try {
    const response = await AxiosInstance.get<Size[]>("/size");

    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
