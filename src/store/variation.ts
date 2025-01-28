import { create } from "zustand";
import { QuantityItemsSize } from "../types";
import { fetchVariation } from "../service";

interface VariationState {
  variations: QuantityItemsSize[];
  isLoading: boolean;
  error: string | null;

  loadVariation: () => Promise<void>;
}

export const useVariationStore = create<VariationState>((set) => ({
  variations: [],
  isLoading: false,
  error: null,

  loadVariation: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchVariation();

      set({ variations: response });
    } catch (err) {
      set({ error: "Failed to fetch variations", isLoading: false });

      console.error("Error fetching variations:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
