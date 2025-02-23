import { onlyCountries } from "../components/ui/checkout-inputs/static-data";
import axios from "axios";

export const fetchLocation = async (query: string, type: string) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search`,
    {
      params: {
        q: query,
        format: "json",
        addressdetails: 1,
        limit: 3,
        language: "en",
        accept_language: "en",
        countrycodes: { onlyCountries },
        type: type,
        userAgent: "my-pet-project (https://github.com/poltoratskyi/Greenshop)",
      },
    }
  );

  return response.data;
};
