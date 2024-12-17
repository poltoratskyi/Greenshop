import { create } from "zustand";

import { CartItem, postCartItem } from "../types";

import {
  fetchUserCart,
  updateCartItemQuantity,
  deleteCartItem,
  addCartItem,
} from "../service";
import { responseData } from "../data";

interface CartState {
  cartItems: CartItem[];
  subtotalAmount: number;
  totalAmount: number;
  isLoading: boolean;
  error: string | null;

  loadUserCart: () => Promise<void>;
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;
  deleteCartItem: (id: number) => Promise<void>;
  addCartItem: (item: postCartItem) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  subtotalAmount: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,

  loadUserCart: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchUserCart();

      set(responseData(response));
    } catch (err) {
      set({ error: "Error fetching items from user cart", isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },

  updateCartItemQuantity: async (id: number, quantity: number) => {
    set({ error: null });

    try {
      const response = await updateCartItemQuantity(id, quantity);

      set(responseData(response));
    } catch (err) {
      set({
        error: "Error updating quantity from user cart",
      });

      console.error("Error updating quantity from user cart:", err);
    } finally {
      set({});
    }
  },

  deleteCartItem: async (id: number) => {
    set({ error: null });

    try {
      const response = await deleteCartItem(id);

      set(responseData(response));
    } catch (err) {
      set({
        error: "Error deleting item from user cart",
      });

      console.error("Error deleting item from user cart:", err);
    } finally {
      set({});
    }
  },

  addCartItem: async (item: postCartItem) => {
    set({ error: null });

    try {
      const response = await addCartItem(item);

      set(responseData(response));
    } catch (err) {
      set({
        error: "Error adding item to user cart",
      });

      console.error("Error adding item to user cart:", err);
    } finally {
      set({});
    }
  },
}));
