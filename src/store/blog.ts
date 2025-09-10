import { create } from "zustand";
import { fetchBlog, fetchSingleBlog } from "../service";
import { Blog } from "@/types";

interface BlogState {
  blog: Blog[];
  isLoading: boolean;
  loadBlog: () => Promise<void>;

  singleBlog: Blog[];
  singleIsLoading: boolean;
  loadSingleBlog: (id: number) => Promise<void>;

  error: string | null;
}

export const useBlogStore = create<BlogState>((set) => ({
  blog: [],
  singleBlog: [],

  isLoading: false,
  singleIsLoading: false,

  error: null,

  loadBlog: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetchBlog();
      set({ blog: response });
    } catch (err) {
      set({ error: "Failed to fetch blog", isLoading: false });
      console.error("Error fetching blog:", err);
    } finally {
      set({ isLoading: false });
    }
  },

  loadSingleBlog: async (id: number) => {
    set({ singleIsLoading: true, error: null });

    try {
      const response = await fetchSingleBlog(id);
      set({ singleBlog: response });
    } catch (err) {
      set({ error: "Failed to fetch single blog", singleIsLoading: false });
      console.error("Error fetching single blog:", err);
    } finally {
      set({ singleIsLoading: false });
    }
  },
}));
