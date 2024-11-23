import { create } from "zustand";

import { Item, Category, Size, Variation } from "../types";

import axiosCategories from "../service/categories";
import axiosCatalog from "../service/catalog";
import axiosSize from "../service/size";
import axiosVariation from "../service/variation";
import axiosItem from "../service/search";

import { svgTrend } from "../components/ui/search-items-result/static-data";

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
    set({ isLoading: true });

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
  isLoading: boolean;

  setInputValue: (value: string) => void;
  fetchSearch: () => Promise<void>;
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

  setInputValue: (value: string) => {
    set({ inputValue: value });
  },

  clearResults: () => set({ results: [] }),

  fetchSearch: async () => {
    const { inputValue, clearResults } = get();

    if (inputValue !== "") {
      set({ isLoading: true });

      try {
        const response = await axiosItem(inputValue);

        if (response) {
          set({ results: response });
        }
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        set({ isLoading: false });
      }
    } else if (inputValue === "") {
      clearResults();
    }
  },
}));

interface UIState {
  search: boolean;

  modal: boolean;
  modalAction: boolean;

  modalCatalog: boolean;

  sort: boolean;
  activeSortMenuValue: string;
  activeSortValue: string;

  burger: boolean;

  selectedSizeIndex: number;

  setOpenSearch: (isOpen: boolean) => void;

  setOpenModal: (isOpen: boolean) => void;
  setToggleAction: (isShown: boolean) => void;

  setOpenModalCatalog: (isOpen: boolean) => void;

  setOpenSort: (isOpen: boolean) => void;
  setActiveSortMenuValue: (value: string) => void;
  setActiveSortValue: (value: string) => void;

  setOpenBurger: (isOpen: boolean) => void;

  setSelectedSizeIndex: (index: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  search: false,

  modal: false,
  modalAction: true,

  modalCatalog: false,

  sort: false,
  activeSortMenuValue: "name",
  activeSortValue: "All Plants",

  burger: false,

  selectedSizeIndex: 0,

  setOpenSearch: (isOpen: boolean) => set({ search: isOpen }),

  setOpenModal: (isOpen: boolean) => set({ modal: isOpen }),
  setToggleAction: (isShown: boolean) => set({ modalAction: isShown }),

  setOpenModalCatalog: (isOpen: boolean) => set({ modal: isOpen }),

  setOpenSort: (isOpen: boolean) => set({ sort: isOpen }),
  setActiveSortMenuValue: (value: string) =>
    set({ activeSortMenuValue: value }),
  setActiveSortValue: (value: string) => set({ activeSortValue: value }),

  setOpenBurger: (isOpen: boolean) => set({ burger: isOpen }),

  setSelectedSizeIndex: (index: number) => set({ selectedSizeIndex: index }),
}));
