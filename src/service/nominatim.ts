import { onlyCountries } from "../components/ui/phone-input/static-data";
import axios from "axios";

export const fetchLocation = async (query: string, type: string) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search`,
    {
      params: {
        q: query,
        format: "json",
        limit: 5,
        language: "en",
        accept_language: "en",
        countrycodes: onlyCountries.map((country) => country).join(","),
        type: type,
        userAgent: "my-pet-project (https://github.com/poltoratskyi/Greenshop)",
      },
    }
  );

  return response.data;
};
