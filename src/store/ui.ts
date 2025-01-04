import { create } from "zustand";

interface UIState {
  // Search
  search: boolean;
  setOpenSearch: (isOpen: boolean) => void;

  // Modal Login
  modal: boolean;
  modalAction: boolean;
  modalCategory: boolean;
  setOpenModal: (isOpen: boolean) => void;
  setToggleAction: (isShown: boolean) => void;
  setOpenModalCategory: (isOpen: boolean) => void;

  // Modal Size
  modalSize: boolean;
  selectedItemId: number | null;
  setSelectedItemId: (id: number) => void;
  setOpenModalSize: (isOpen: boolean) => void;

  // Sort
  sort: boolean;
  activeSortMenuValue: string;
  activeSortValue: string;
  setOpenSort: (isOpen: boolean) => void;
  setActiveSortMenuValue: (value: string) => void;
  setActiveSortValue: (value: string) => void;

  // Burger Menu
  burger: boolean;
  setOpenBurger: (isOpen: boolean) => void;

  // Sizes
  selectedSizeIndex: number;
  setSelectedSizeIndex: (index: number) => void;

  // Switch image
  imageIndex: number | null;
  switchImage: string | null;
  setImageIndex: (index: number) => void;
  setSwitchImage: (image: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Search
  search: false,
  setOpenSearch: (isOpen) => set({ search: isOpen }),

  // Modal Login
  modal: false,
  modalAction: true,
  modalCategory: false,
  setOpenModal: (isOpen) => set({ modal: isOpen }),
  setToggleAction: (isShown) => set({ modalAction: isShown }),
  setOpenModalCategory: (isOpen) => set({ modalCategory: isOpen }),

  // Modal Size
  modalSize: false,
  selectedItemId: null,
  setOpenModalSize: (isOpen) => set({ modalSize: isOpen }),
  setSelectedItemId: (id) => set({ selectedItemId: id }),

  // Sort
  sort: false,
  activeSortMenuValue: "name",
  activeSortValue: "All Plants",
  setOpenSort: (isOpen) => set({ sort: isOpen }),
  setActiveSortMenuValue: (value) => set({ activeSortMenuValue: value }),
  setActiveSortValue: (value) => set({ activeSortValue: value }),

  // Burger Menu
  burger: false,
  setOpenBurger: (isOpen) => set({ burger: isOpen }),

  // Sizes
  selectedSizeIndex: 0,
  setSelectedSizeIndex: (index) => set({ selectedSizeIndex: index }),

  // Switch image
  imageIndex: null,
  switchImage: null,
  setImageIndex: (index) => set({ imageIndex: index }),
  setSwitchImage: (image) => set({ switchImage: image }),
}));
