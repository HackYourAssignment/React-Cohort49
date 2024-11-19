import { useState, useEffect } from "react";
import Categories from "./components/Categories";
import ProductsList from "./components/ProductsList";
import { fetchProducts } from "./api/fetch-data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const handleSelectCategory = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  useEffect(() => {
    setProducts([]);

    if (selectedCategory) {
      fetchProducts(selectedCategory).then((data) => {
        setProducts(data);
      });
    } else {
      fetchProducts().then((data) => {
        setProducts(data);
      });
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
