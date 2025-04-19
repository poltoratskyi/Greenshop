import { create } from "zustand";
import { Order } from "../types";
import { createOrder } from "../service";
import { AxiosError } from "axios";

interface OrderState {
  order: Order | null;

  isLoading: boolean;
  error: { message: string } | null;

  createOrder(order: Order): Promise<void>;
}

export const useOrderStore = create<OrderState>((set) => ({
  order: null,

  isLoading: false,
  error: null,

  createOrder: async (order) => {
    set({ isLoading: true, error: null });

    try {
      const response = await createOrder(order);

      set({ order: response });
    } catch (err: AxiosError | any) {
      set({
        error: {
          message: err.response.data.error,
        },
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
