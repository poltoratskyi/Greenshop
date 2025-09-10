import { create } from "zustand";
import { Item } from "../types";
import { fetchSingleItem } from "../service";

interface ItemState {
  item: Item[];
  isLoading: boolean;
  loadItem: (itemId: number) => Promise<void>;

  modalItem: Item[];
  modalIsLoading: boolean;
  loadModalSingleItem: (itemId: number) => Promise<void>;

  error: string | null;
}

export const useItemStore = create<ItemState>((set) => ({
  item: [],
  modalItem: [],

  isLoading: false,
  modalIsLoading: false,

  error: null,

  loadItem: async (itemId: number) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchSingleItem(itemId);
      set({ item: response });
    } catch (err) {
      set({ error: "Failed to fetch item", isLoading: false });
      console.error("Error fetching item:", err);
    } finally {
      set({ isLoading: false });
    }
  },

  loadModalSingleItem: async (itemId: number) => {
    set({ modalIsLoading: true, error: null });

    try {
      const response = await fetchSingleItem(itemId);
      set({ modalItem: response });
    } catch (err) {
      set({ error: "Failed to fetch single item", modalIsLoading: false });
      console.error("Error fetching single item:", err);
    } finally {
      set({ modalIsLoading: false });
    }
  },
}));
