import { processWishlistItems } from "@/data";
import { fetchUserWishlist, deleteWishlistItem } from "@/service";
import { WishlistItem } from "@/types";
import { create } from "zustand";

interface WishlistState {
  wishlistItems: WishlistItem[];
  createdAt: Date;

  isLoading: boolean;
  isItemAdded: boolean;

  error: string | null;

  loadUserWishlist: () => Promise<void>;
  deleteWishlistItem: (itemId: number) => Promise<void>;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlistItems: [],
  createdAt: new Date(),

  isLoading: false,
  isItemAdded: false,

  error: null,

  loadUserWishlist: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchUserWishlist();

      set(processWishlistItems(response));
    } catch (err) {
      set({
        error: "Error fetching items from user wishlist",
        isLoading: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteWishlistItem: async (itemId: number) => {
    set({ isLoading: true, error: null });

    try {
      const response = await deleteWishlistItem(itemId);

      set(processWishlistItems(response));
    } catch (err) {
      set({
        error: "Error deleting item from user wishlist",
        isLoading: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
