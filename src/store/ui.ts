import { create } from "zustand";

interface UIState {
  // Search
  search: boolean;
  setOpenSearch: (isOpen: boolean) => void;

  // Modals
  modal: boolean;
  modalAction: boolean;
  modalCategory: boolean;
  setOpenModal: (isOpen: boolean) => void;
  setToggleAction: (isShown: boolean) => void;
  setOpenModalCategory: (isOpen: boolean) => void;

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
}

export const useUIStore = create<UIState>((set) => ({
  // Search
  search: false,
  setOpenSearch: (isOpen) => set({ search: isOpen }),

  // Modals
  modal: false,
  modalAction: true,
  modalCategory: false,
  setOpenModal: (isOpen) => set({ modal: isOpen }),
  setToggleAction: (isShown) => set({ modalAction: isShown }),
  setOpenModalCategory: (isOpen) => set({ modalCategory: isOpen }),

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
}));
