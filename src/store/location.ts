import { create } from "zustand";
import { fetchLocation } from "../service/nominatim";
import { NominatimLocation } from "../types/nominatim-location";

interface Props {
  countryData: NominatimLocation[];
  cityData: NominatimLocation[];
  addressData: NominatimLocation[];
  stateData: NominatimLocation[];

  isCountryDataLoading: boolean;
  isCityDataLoading: boolean;
  isAddressDataLoading: boolean;
  isStateDataLoading: boolean;

  error: string | null;

  loadCountry: (query: string, type: string) => Promise<void>;
  loadCity: (query: string, type: string) => Promise<void>;
  loadAddress: (query: string, type: string) => Promise<void>;
  loadState: (query: string, type: string) => Promise<void>;

  resetCountryData: () => void;
  resetAddressData: () => void;
  resetCityData: () => void;
  resetStateData: () => void;
}

export const useLocationStore = create<Props>((set) => ({
  countryData: [],
  cityData: [],
  addressData: [],
  stateData: [],

  isCountryDataLoading: false,
  isCityDataLoading: false,
  isAddressDataLoading: false,
  isStateDataLoading: false,

  error: null,

  resetCountryData: () => set({ countryData: [], error: null }),
  resetCityData: () => set({ cityData: [], error: null }),
  resetAddressData: () => set({ addressData: [], error: null }),
  resetStateData: () => set({ stateData: [], error: null }),

  loadCountry: async (query: string, type: string) => {
    set({ isCountryDataLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ countryData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isCountryDataLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isCountryDataLoading: false });
    }
  },

  loadCity: async (query: string, type: string) => {
    set({ isCityDataLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ cityData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isCityDataLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isCityDataLoading: false });
    }
  },

  loadAddress: async (query: string, type: string) => {
    set({ isAddressDataLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ addressData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isAddressDataLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isAddressDataLoading: false });
    }
  },

  loadState: async (query: string, type: string) => {
    set({ isStateDataLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ stateData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isStateDataLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isStateDataLoading: false });
    }
  },
}));
