import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  categories: [],
  products: [],
  isLoading: false,
  error: null,

  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      set({ categories: response.data, isLoading: false });
    } catch (err) {
      set({ error: "Failed to load categories", isLoading: false });
    }
  },

  fetchProducts: async (category = "") => {
    set({ isLoading: true, error: null });
    try {
      const endpoint = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products";
      const response = await axios.get(endpoint);
      set({ products: response.data, isLoading: false });
    } catch (err) {
      set({ error: "Failed to load products", isLoading: false });
    }
  },
}));

export default useStore;
