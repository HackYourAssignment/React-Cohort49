import { useState } from "react";
import "./App.css";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  let filteredProducts;

  if (selectedCategory) {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory.slice(6)
    );
  } else {
    filteredProducts = products;
  }

  return (
    <>
      <h1>Products</h1>
      <CategoryList 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
