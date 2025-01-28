import { create } from "zustand";
import { ItemSize } from "../types";
import { fetchSize } from "../service";

interface SizeState {
  sizeMenu: ItemSize[];
  selectedName: string[];
  isLoading: boolean;
  error: string | null;

  loadSize: () => Promise<void>;
  selectedSize: (name: string, isSelected: boolean) => void;
}

export const useSizeStore = create<SizeState>((set) => ({
  sizeMenu: [],
  selectedName: [],
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

  selectedSize: (name: string, isSelected: boolean) => {
    set((state) => ({
      selectedName: isSelected
        ? [...state.selectedName, name]
        : state.selectedName.filter((sizeName) => sizeName !== name),
    }));
  },
}));
