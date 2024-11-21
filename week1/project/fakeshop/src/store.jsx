// store.js
import { create } from 'zustand';
import categories from './fake-data/all-categories.js';

const useStore = create((set) => ({
  categories,
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default useStore;
