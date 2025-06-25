import { create } from "zustand";
import { ItemSize } from "../types";
import { fetchSize } from "../service";

interface SizeState {
  sizeMenu: ItemSize[];
  selectedNameIds: number[];
  isLoading: boolean;
  error: string | null;

  loadSize: () => Promise<void>;
  onSelectedSizeIds: (id: number) => void;
  resetFilters: () => void;
}

export const useSizeStore = create<SizeState>((set) => ({
  sizeMenu: [],
  selectedNameIds: [],
  isLoading: false,
  error: null,

  loadSize: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchSize();

      set({ sizeMenu: response });
    } catch (err) {
      set({ error: "Failed to fetch size menu", isLoading: false });

      console.error("Error fetching size:", err);
    } finally {
      set({ isLoading: false });
    }
  },

  onSelectedSizeIds: async (id: number) =>
    set((state) => {
      const isSelected = state.selectedNameIds.includes(id);

      return {
        selectedNameIds: isSelected
          ? state.selectedNameIds.filter((itemId) => itemId !== id)
          : [...state.selectedNameIds, id],
      };
    }),

  resetFilters: () => set({ selectedNameIds: [] }),
}));
