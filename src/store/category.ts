import { create } from "zustand";

import { QuantityItemsCategory } from "../types";

import { fetchCategory } from "../service";

interface CategoryState {
  category: QuantityItemsCategory[];
  isLoading: boolean;
  error: string | null;

  loadCategory: () => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  category: [],
  isLoading: false,
  error: null,

  loadCategory: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchCategory();

      set({ category: response });
    } catch (err) {
      set({ error: "Failed to fetch category", isLoading: false });

      console.error("Error fetching category:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
