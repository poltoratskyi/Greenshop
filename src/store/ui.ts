import { create } from "zustand";

interface UIState {
  // Search
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;

  // Modal Login
  isModalOpen: boolean;
  isModalActionOpen: boolean;
  isModalCategoryOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  setIsModalActionOpen: (isShown: boolean) => void;
  setIsModalCategoryOpen: (isOpen: boolean) => void;

  // Modal Size
  isModalSizeOpen: boolean;
  selectedSizeId: number | null;
  setIsModalSizeOpen: (isOpen: boolean) => void;
  setSelectedItemSizeId: (id: number) => void;

  // Sort
  isSortOpen: boolean;
  selectedSortOption: string;
  selectedSortLabel: string;
  setIsSortOpen: (isOpen: boolean) => void;
  setSelectedSortOption: (value: string) => void;
  setSelectedSortLabel: (value: string) => void;

  // Burger Menu
  isBurgerOpen: boolean;
  setIsBurgerOpen: (isOpen: boolean) => void;

  // Switch sizes
  currentSizeIndex: number;
  setCurrentSizeIndex: (index: number) => void;

  // Switch image
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  resetVariationSelection: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Search
  isSearchOpen: false,
  setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),

  // Modal Login
  isModalOpen: false,
  isModalActionOpen: true,
  isModalCategoryOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setIsModalActionOpen: (isShown) => set({ isModalActionOpen: isShown }),
  setIsModalCategoryOpen: (isOpen) => set({ isModalCategoryOpen: isOpen }),

  // Modal Size
  isModalSizeOpen: false,
  selectedSizeId: null,
  setIsModalSizeOpen: (isOpen) => set({ isModalSizeOpen: isOpen }),
  setSelectedItemSizeId: (id) => set({ selectedSizeId: id }),

  // Sort
  isSortOpen: false,
  selectedSortOption: "name",
  selectedSortLabel: "All Plants",
  setIsSortOpen: (isOpen) => set({ isSortOpen: isOpen }),
  setSelectedSortOption: (value) => set({ selectedSortOption: value }),
  setSelectedSortLabel: (value) => set({ selectedSortLabel: value }),

  // Burger Menu
  isBurgerOpen: false,
  setIsBurgerOpen: (isOpen) => set({ isBurgerOpen: isOpen }),

  // Switch sizes
  currentSizeIndex: 0,
  setCurrentSizeIndex: (index) => set({ currentSizeIndex: index }),

  // Switch image
  currentImageIndex: 0,
  setCurrentImageIndex: (index) => set({ currentImageIndex: index }),
  resetVariationSelection: () =>
    set({ currentImageIndex: 0, currentSizeIndex: 0 }),
}));
