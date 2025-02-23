import { create } from "zustand";
import { fetchLocation } from "../service/nominatim";
import { NominatimLocation } from "../types/nominatim-location";

interface Props {
  countryData: NominatimLocation[];
  cityData: NominatimLocation[];
  addressData: NominatimLocation[];
  stateData: NominatimLocation[];

  isLoading: boolean;
  error: string | null;

  loadCountry: (query: string, type: string) => Promise<void>;
  loadCity: (query: string, type: string) => Promise<void>;
  loadAddress: (query: string, type: string) => Promise<void>;
  loadState: (query: string, type: string) => Promise<void>;
}

export const useLocationStore = create<Props>((set) => ({
  countryData: [],
  cityData: [],
  addressData: [],
  stateData: [],

  isLoading: false,
  error: null,

  loadCountry: async (query: string, type: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ countryData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isLoading: false });
    }
  },

  loadCity: async (query: string, type: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ cityData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isLoading: false });
    }
  },

  loadAddress: async (query: string, type: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ addressData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isLoading: false });
    }
  },

  loadState: async (query: string, type: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchLocation(query, type);

      set({ stateData: response });
    } catch (err) {
      set({
        error: "Location not found",
        isLoading: false,
      });
      console.error("Location not found", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
