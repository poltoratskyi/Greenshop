import { create } from "zustand";

import { QuantityItemsCategory } from "../types";

import { fetchCategory } from "../service";

interface CategoryState {
  category: QuantityItemsCategory[];
  selectedNameIds: number[];
  isLoading: boolean;
  error: string | null;

  loadCategory: () => Promise<void>;
  onSelectedItemIds: (id: number) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  category: [],
  selectedNameIds: [],
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

  onSelectedItemIds: async (id: number) =>
    set((state) => {
      const isSelected = state.selectedNameIds.includes(id);

      return {
        selectedNameIds: isSelected
          ? state.selectedNameIds.filter((itemId) => itemId !== id)
          : [...state.selectedNameIds, id],
      };
    }),
}));
