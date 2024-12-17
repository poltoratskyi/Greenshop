import { create } from "zustand";

import { Item } from "../types";

import { fetchSearchItem } from "../service";

import { svgTrend } from "../components/ui/search-items-result/static-data";

interface SearchState {
  trending: { name: string; svg: JSX.Element; rate: number }[];
  inputValue: string;
  results: Item[];
  isLoading: boolean;
  error: string | null;

  setInputValue: (value: string) => void;
  loadSearch: () => Promise<void>;
  clearResults: () => void;
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
  inputValue: "",
  results: [],
  isLoading: false,
  error: null,

  setInputValue: (value: string) => {
    set({ inputValue: value, error: null });
  },

  clearResults: () => set({ results: [], error: null }),

  loadSearch: async () => {
    const { inputValue } = get();

    set({ isLoading: true, error: null });

    try {
      const response = await fetchSearchItem(inputValue);

      set({ results: response });
    } catch (err) {
      set({ error: "Failed to fetch search results", isLoading: false });

      console.error("Error fetching items:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));
