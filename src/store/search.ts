import { JSX } from "react";
import { create } from "zustand";
import { Item } from "../types";
import { fetchSearchItem } from "../service";
import { svgTrend } from "../components/shared/search-results/static-data";

interface SearchState {
  trending: { name: string; svg: JSX.Element; rate: number }[];
  searchQuery: string;
  searchResults: Item[];
  isLoading: boolean;
  error: string | null;

  setSearchQuery: (value: string) => void;
  fetchSearchResults: () => Promise<void>;
  resetSearchResults: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  trending: [
    {
      name: "Beach Spider Lily",
      svg: svgTrend,
      rate: 3,
    },
    {
      name: "Chinese Evergreen",
      svg: svgTrend,
      rate: 2,
    },
    {
      name: "Angel Wing Begonia",
      svg: svgTrend,
      rate: 1,
    },
  ],
  searchQuery: "",
  searchResults: [],
  isLoading: false,
  error: null,

  setSearchQuery: (value: string) => {
    set({ searchQuery: value, error: null });
  },

  resetSearchResults: () => set({ searchResults: [], error: null }),

  fetchSearchResults: async () => {
    const { searchQuery } = get();

    set({ isLoading: true, error: null });

    try {
      const response = await fetchSearchItem(searchQuery);

      set({ searchResults: response });
    } catch (err) {
      set({ error: "Failed to fetch search searchResults", isLoading: false });

      console.error("Error fetching items:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
