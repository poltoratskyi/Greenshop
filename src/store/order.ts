import { create } from "zustand";
import { Order } from "../types";
import { fetchUserOrder, createOrder } from "../service";

interface OrderState {
  order: Order | null;

  isLoading: boolean;
  error: string | null;

  loadUserOrder: (email: string) => Promise<void>;
  addUserOrder(order: Order): Promise<void>;
}
[];

export const useOrderStore = create<OrderState>((set) => ({
  order: null,

  isLoading: false,
  error: null,

  loadUserOrder: async (email) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchUserOrder(email);

      set({ order: response });
    } catch (err) {
      set({ error: "Error fetching user order" });
    } finally {
      set({ isLoading: false });
    }
  },

  addUserOrder: async (order) => {
    set({ isLoading: true, error: null });

    try {
      const response = await createOrder(order);

      set({ order: response });
    } catch (err) {
      set({ error: "Error adding user order", isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));
