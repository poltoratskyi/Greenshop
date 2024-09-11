import { create } from "zustand";

import { Item, Category, Size, Variation } from "../types";

import axiosCategories from "../service/categories";
import axiosCatalog from "../service/catalog";
import axiosSize from "../service/size";
import axiosVariation from "../service/variation";
import axiosItem from "../service/search";
import { svgRight } from "../components/shared/results/results";

interface CountState {
  count: number;

  increase: (id: number) => void;
  decrease: (id: number) => void;
}

export const useCountStore = create<CountState>((set) => ({
  count: 1,

  increase: (id: number) => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrease: (id: number) => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

interface CatalogState {
  catalog: Item[];
  isLoading: boolean;

  fetchCatalog: () => Promise<void>;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  catalog: [],
  isLoading: true,

  fetchCatalog: async () => {
    try {
      const response = await axiosCatalog();

      if (response) {
        set({ catalog: response });
      }
    } catch (err) {
      set({ isLoading: true });

      console.error("Error fetching catalog:", err);
    } finally {
      set({ isLoading: false });
    }
  },
}));

interface CategoriesState {
  categories: Category[];

  fetchCategories: () => Promise<void>;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],

  fetchCategories: async () => {
    try {
      const response = await axiosCategories();

      if (response) {
        set({ categories: response });
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  },
}));

interface SizeState {
  sizeMenu: Size[];

  fetchSize: () => Promise<void>;
}

export const useSizeStore = create<SizeState>((set) => ({
  sizeMenu: [],

  fetchSize: async () => {
    try {
      const response = await axiosSize();

      if (response) {
        set({ sizeMenu: response });
      }
    } catch (err) {
      console.error("Error fetching size:", err);
    }
  },
}));

interface VariationState {
  variation: Variation[];

  fetchVariation: () => Promise<void>;
}

export const useVariationStore = create<VariationState>((set) => ({
  variation: [],

  fetchVariation: async () => {
    try {
      const response = await axiosVariation();

      if (response) {
        set({ variation: response });
      }
    } catch (err) {
      console.error("Error fetching variation:", err);
    }
  },
}));

interface SearchState {
  trending: { name: string; svg: JSX.Element; rate: number }[];
  inputValue: string;
  results: Item[];

  setInputValue: (value: string) => void;
  fetchSearch: () => Promise<void>;
  clearResults: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  trending: [
    {
      name: "Beach Spider Lily",
      svg: svgRight,
      rate: 3,
    },
    {
      name: "Chinese Evergreen",
      svg: svgRight,
      rate: 2,
    },
    {
      name: "Angel Wing Begonia",
      svg: svgRight,
      rate: 1,
    },
  ],
  inputValue: "",
  results: [],

  setInputValue: (value: string) => {
    set({ inputValue: value });
  },

  clearResults: () => set({ results: [] }),

  fetchSearch: async () => {
    const { inputValue, clearResults } = get();

    if (inputValue !== "") {
      try {
        const response = await axiosItem(inputValue);

        if (response) {
          set({ results: response });
        }
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    } else {
      clearResults();
    }
  },
}));

interface UIState {
  openSearch: boolean;
  openModal: boolean;
  sortMenu: boolean;
  showMenu: boolean;

  setOpenSearch: (isOpen: boolean) => void;
  setOpenModal: (isOpen: boolean) => void;
  setOpenSort: (isOpen: boolean) => void;
  setShowMenu: (isShown: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  openSearch: false,
  openModal: false,
  sortMenu: false,
  showMenu: true,

  setOpenSearch: (isOpen: boolean) => set({ openSearch: isOpen }),
  setOpenModal: (isOpen: boolean) => set({ openModal: isOpen }),
  setOpenSort: (isOpen: boolean) => set({ sortMenu: isOpen }),
  setShowMenu: (isShown: boolean) => set({ showMenu: isShown }),
}));
