import { create } from "zustand";

import { Item } from "../types";

import { fetchSingleItem } from "../service";

interface ItemState {
  item: Item[];
  isLoading: boolean;
  loadItem: (id: number) => Promise<void>;

  modalItem: Item[];
  modalIsLoading: boolean;
  loadModalSingleItem: (id: number) => Promise<void>;

  error: string | null;
}

export const useItemStore = create<ItemState>((set) => ({
  item: [],
  modalItem: [],

  isLoading: false,
  modalIsLoading: false,

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

  loadModalSingleItem: async (id: number) => {
    set({ modalIsLoading: true, error: null });

    try {
      const response = await fetchSingleItem(id);
      set({ modalItem: response });
    } catch (err) {
      set({ error: "Failed to fetch item", modalIsLoading: false });
      console.error("Error fetching item:", err);
    } finally {
      set({ modalIsLoading: false });
    }
  },
}));
