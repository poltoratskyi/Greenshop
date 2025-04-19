import { create } from "zustand";
import { Item } from "../types";
import { fetchCatalog } from "../service";

interface CatalogState {
  catalog: Item[];
  isLoading: boolean;
  error: string | null;

  loadCatalog: (params?: {
    category?: number[];
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
    params = { category: [], size: [], sort: "", direction: "" }
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
