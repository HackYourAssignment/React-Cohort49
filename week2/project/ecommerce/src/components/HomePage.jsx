import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const HomePage = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  categoriesLoading,
  categoriesError,
  products,
  productsLoading,
  productsError,
}) => {
  return (
    <>
      <h1>Products</h1>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        loading={categoriesLoading}
        error={categoriesError}
      />
      <ProductList
        products={products}
        loading={productsLoading}
        error={productsError}
      />
    </>
  );
};

export default HomePage;
