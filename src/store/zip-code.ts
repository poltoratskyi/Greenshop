import { create } from "zustand";
import { fetchZipCode } from "../service/zip-code";
import { ZipCodeData } from "../types/zip-code";

interface Props {
  zipCode: string;
  zipData: ZipCodeData | null;
  isLoading: boolean;
  error: string | null;

  resetZipData: () => void;

  loadZipData: (code: string) => Promise<void>;
}

export const useZipCodeStore = create<Props>((set) => ({
  zipCode: "",
  zipData: null,
  isLoading: false,
  error: null,

  resetZipData: () => set({ zipData: null }),

  loadZipData: async (code: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchZipCode(code);

      set({ zipData: response });
    } catch (err) {
      set({
        error: "Please provide a valid zip code. For example: 20500",
        isLoading: false,
      });
      console.error("Error fetching zip code:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
