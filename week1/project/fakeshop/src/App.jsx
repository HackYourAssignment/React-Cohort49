import React, { useState } from "react";
import CategoryList from "./components/CategoryList.jsx";
import ProductList from "./components/ProductList.jsx";

import categoriesData from "./fake-data/all-categories.js";
import productsData from "./fake-data/all-products.js";

const App = () => {
  const [categories] = useState(categoriesData);
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : [];

  return (
    <div className="app">
      <h1>Store</h1>
      <div className="main-container">
        <CategoryList
          categories={categories}
          onCategoryClick={setSelectedCategory}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
