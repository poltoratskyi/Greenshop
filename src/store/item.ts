import { create } from "zustand";

import { Item } from "../types";

import { fetchSingleItem } from "../service";

interface ItemState {
  item: Item[];
  isLoading: boolean;
  error: string | null;
  loadItem: (id: number) => Promise<void>;
}

export const useItemStore = create<ItemState>((set) => ({
  item: [],
  isLoading: false,
  error: null,

  loadItem: async (id: number) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchSingleItem(id);
      set({ item: response });
    } catch (err) {
      set({ error: "Failed to fetch item", isLoading: false });
      console.error("Error fetching item:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
