import { create } from "zustand";
import { Item } from "../types";
import { fetchCatalog } from "../service";

interface CatalogState {
  catalog: Item[];
  isLoading: boolean;
  error: string | null;

  loadCatalog: (params?: {
    category?: number[];
    price_from?: number;
    price_to?: number;
    size?: number[];
    sort?: string;
    direction?: string;
  }) => Promise<void>;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  catalog: [],
  selectedName: [],
  isLoading: false,
  error: null,

  loadCatalog: async (
    params = {
      category: [],
      price_from: 0,
      price_to: 0,
      size: [],
      sort: "",
      direction: "",
    }
  ) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchCatalog(params);

      set({ catalog: response });
    } catch (err) {
      set({
        error: "Error fetching catalog",
        isLoading: false,
      });
      console.error("Error fetching catalog:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
