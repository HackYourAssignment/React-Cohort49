import { useState, useEffect } from "react";
import allProducts from "./fake-data/all-products";
import Categories from "./components/Categories";
import ProductsList from "./components/ProductsList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(allProducts);

  const handleSelectCategory = (category) => {
    const categoryName = category.slice(6);
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories handleSelectCategory={handleSelectCategory} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
