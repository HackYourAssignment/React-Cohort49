import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="title">Products</h1>
          <CategoryList setActiveCategory={setActiveCategory} />
        </header>

        <main className="content">
          <ProductList activeCategory={activeCategory} />
        </main>
      </div>
    </Router>
  );
}

export default App;
