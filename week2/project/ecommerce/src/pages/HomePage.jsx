import { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const { data: products, loading: productsLoading, error: productsError } = useFetch(
    selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products"
  );

  if (categoriesLoading || productsLoading) return <div>Loading...</div>;
  if (categoriesError || productsError) return <div>Error loading data</div>;

  return (
    <>
      <CategoryList
        categories={categories || []}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <ProductList products={products || []} />
    </>
  );
}

export default HomePage;
