import { useState } from "react";
import "./App.css";
import allProducts from "./fake-data/all-products";
import Categories from "./categories";
import Products from "./Products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) =>
          product.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase()),
        );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="app">
        <Categories
          categories={[
            "All",
            ...new Set(allProducts.map((prod) => prod.category)),
          ]}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategoryClick}
        />
        <Products products={filteredProducts} />
      </div>
    </>
  );
}

export default App;
