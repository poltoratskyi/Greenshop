import { create } from "zustand";

interface UIState {
  // Search
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;

  // Auth Modal
  isModalActionOpen: boolean;
  setIsModalActionOpen: (isShown: boolean) => void;

  // Modal category
  isModalCategoryOpen: boolean;
  setIsModalCategoryOpen: (isOpen: boolean) => void;

  // Toast
  isToastOpen: boolean;
  setIsToastOpen: (isOpen: boolean) => void;

  // Toast text
  toastType: string;
  setToastType: (type: string) => void;

  // Is success toast
  isSuccessToast: boolean;
  setIsSuccessToast: (isOpen: boolean) => void;

  // Discount Popup
  isDiscountPopupOpen: boolean;
  setIsDiscountPopupOpen: (isOpen: boolean) => void;

  // Is Discount success
  isDiscountSuccess: boolean;
  setIsDiscountSuccess: (isOpen: boolean) => void;

  // Modal Size
  isModalSizeOpen: boolean;
  setIsModalSizeOpen: (isOpen: boolean) => void;

  openedModalType: boolean;
  setOpenedModalType: (isOpen: boolean) => void;

  isLoading: boolean;
  setIsLoading: (isOpen: boolean) => void;

  selectedSizeId: number | null;
  setSelectedItemSizeId: (id: number) => void;

  // Sort
  isSortOpen: boolean;
  setIsSortOpen: (isOpen: boolean) => void;

  selectedSortOption: string;
  setSelectedSortOption: (value: string) => void;

  selectedSortLabel: string;
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

  // Checkout auto complete
  isAutocompleteOpen: boolean;
  setIsAutocompleteOpen: (isOpen: boolean) => void;

  // Modal order
  isOrderOpen: boolean;
  setIsOrderOpen: (isOpen: boolean) => void;

  isOrderSuccess: boolean;
  setIsOrderSuccess: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Search
  isSearchOpen: false,
  setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),

  // Auth Modal
  isModalActionOpen: true,
  setIsModalActionOpen: (isShown) => set({ isModalActionOpen: isShown }),

  // Modal category
  isModalCategoryOpen: false,
  setIsModalCategoryOpen: (isOpen) => set({ isModalCategoryOpen: isOpen }),

  // Toast
  isToastOpen: false,
  setIsToastOpen: (isOpen) => set({ isToastOpen: isOpen }),

  // Toast text
  toastType: "",
  setToastType: (type) => set({ toastType: type }),

  // Is success toast
  isSuccessToast: false,
  setIsSuccessToast: (isOpen) => set({ isSuccessToast: isOpen }),

  // Discount Popup
  isDiscountPopupOpen: false,
  setIsDiscountPopupOpen: (isOpen) => set({ isDiscountPopupOpen: isOpen }),

  // Is Discount success
  isDiscountSuccess: false,
  setIsDiscountSuccess: (isOpen) => set({ isDiscountSuccess: isOpen }),

  // Modal Size
  isModalSizeOpen: false,
  setIsModalSizeOpen: (isOpen) => set({ isModalSizeOpen: isOpen }),

  isLoading: false,
  setIsLoading: (isOpen) => set({ isLoading: isOpen }),

  openedModalType: false,
  setOpenedModalType: (isOpen) => set({ openedModalType: isOpen }),

  selectedSizeId: null,
  setSelectedItemSizeId: (id) => set({ selectedSizeId: id }),

  // Sort
  isSortOpen: false,
  setIsSortOpen: (isOpen) => set({ isSortOpen: isOpen }),

  selectedSortOption: "name",
  setSelectedSortOption: (value) => set({ selectedSortOption: value }),

  selectedSortLabel: "All Plants",
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

  // Checkout auto complete
  isAutocompleteOpen: true,
  setIsAutocompleteOpen: (isOpen) => set({ isAutocompleteOpen: isOpen }),

  // Modal order success
  isOrderOpen: false,
  setIsOrderSuccess: (isOpen) => set({ isOrderSuccess: isOpen }),

  isOrderSuccess: false,
  setIsOrderOpen: (isOpen) => set({ isOrderOpen: isOpen }),
}));
