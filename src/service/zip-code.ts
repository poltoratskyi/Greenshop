import { ZipCodeData } from "../types";
import axios from "axios";

export const fetchZipCode = async (zipCode: string): Promise<ZipCodeData> => {
  const response = await axios.get<ZipCodeData>(
    `https://api.zippopotam.us/us/${zipCode}`
  );
  return response.data;
};
