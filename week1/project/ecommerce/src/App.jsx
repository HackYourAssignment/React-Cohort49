import { useState } from "react";
import categories from "./data/categories";
import products from "./data/products";
import CategoryList from "./component/CategoryList";
import ProductList from "./component/ProductCard";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container">
      <h1>My E-commerce Site</h1>

      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
