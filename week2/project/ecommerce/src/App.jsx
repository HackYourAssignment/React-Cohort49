import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <Router>
      <div>
        <CategoryList setActiveCategory={setActiveCategory} />
        <Routes>
          <Route path="/" element={<ProductList activeCategory={activeCategory} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
