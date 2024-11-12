import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import categories from "./data/categories";
import products from "./data/products";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="App">
      <h1>My eCommerce Store</h1>
      <CategoryList
        categories={["all", ...categories]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={products} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
