import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import allProducts from "./fake-data/all-products";
import allCategories from "./fake-data/all-categories";
import "./styles/index.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter(
          (product) => product.category === selectedCategory.replace("FAKE: ", "")
        );

  return (
    <div className="App">
      <h1>Fake Products</h1>
      <CategoryList
        categories={["All", ...allCategories]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
