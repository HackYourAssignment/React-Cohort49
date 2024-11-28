import { useState } from "react";
import "../App.css";

import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data: categories, error: errorCategories } = useFetch(
    `https://fakestoreapi.com/products/categories`
  );

  let productsUrl = "https://fakestoreapi.com/products";

  if (selectedCategory) {
    productsUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  }

  const {
    data: products,
    error: errorProducts,
    loading,
  } = useFetch(productsUrl);

  return (
    <>
      <Header title="Products" />

      <CategoryList
        categories={categories}
        loading={loading}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        error={errorCategories}
      />

      <ProductList
        products={products}
        loading={loading}
        error={errorProducts}
      />
    </>
  );
}

export default HomePage;
