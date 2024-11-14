import { useState } from 'react';
import allProducts from './fake-data/all-products.js';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category.includes(selectedCategory))
    : allProducts;

  return (
    <div className="app">
      <header>
        <h1>My E-commerce App</h1>
      </header>

      <CategoryList
        categories={[...new Set(allProducts.flatMap((p) => p.category))]}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;