import { Blog } from "@/types";
import { AxiosInstance } from "./axios";

export const fetchBlog = async (): Promise<any> => {
  const response = await AxiosInstance.get<Blog>("/blog");

  return response.data;
};

export const fetchSingleBlog = async (id: number): Promise<any> => {
  const response = await AxiosInstance.get<Blog>(`/blog/` + id);

  return response.data;
};
