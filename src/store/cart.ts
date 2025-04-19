import { create } from "zustand";
import { CartItem, PostCartItem } from "../types";
import {
  fetchUserCart,
  updateCartItemQuantity,
  deleteCartItem,
  addCartItem,
} from "../service";
import { processCartItems } from "../data";
import { AxiosError } from "axios";

interface CartState {
  cartItems: CartItem[];
  subtotalAmount: number;
  totalAmount: number;

  isLoading: boolean;
  isItemAdded: boolean;

  patchError: { message: string; available: number } | null;
  error: string | null;

  loadUserCart: () => Promise<void>;
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;
  deleteCartItem: (id: number) => Promise<void>;
  addCartItem: (item: PostCartItem) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  subtotalAmount: 0,
  totalAmount: 0,

  isLoading: false,
  isItemAdded: false,

  error: null,
  patchError: null,

  loadUserCart: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchUserCart();

      set(processCartItems(response));
    } catch (err) {
      set({ error: "Error fetching items from user cart", isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },

  updateCartItemQuantity: async (id: number, quantity: number) => {
    set({ isLoading: true, patchError: null });

    try {
      const response = await updateCartItemQuantity(id, quantity);

      set(processCartItems(response));
    } catch (err: AxiosError | any) {
      set({
        patchError: {
          message: err.response.data.error,
          available: err.response.data.available,
        },
      });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteCartItem: async (id: number) => {
    set({ isLoading: true, error: null });

    try {
      const response = await deleteCartItem(id);

      set(processCartItems(response));
    } catch (err) {
      set({
        error: "Error deleting item from user cart",
      });
    } finally {
      set({ isLoading: false });
    }
  },

  addCartItem: async (item: PostCartItem) => {
    set({ isLoading: true, error: null });
    set({ isItemAdded: true, error: null });

    try {
      const response = await addCartItem(item);

      set(processCartItems(response));
    } catch (err) {
      set({
        error: "Error adding item to user cart",
      });
    } finally {
      set({ isLoading: false });
      set({ isItemAdded: false });
    }
  },
}));
