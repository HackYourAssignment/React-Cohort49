import useStore from './store';

const useCategoryStore = () => {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  return { selectedCategory, setSelectedCategory };
};

export default useCategoryStore;
