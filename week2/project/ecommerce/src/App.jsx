import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  // Custom component to conditionally render the header
  const Header = () => {
    const location = useLocation(); // Get current route

    // Check if the current path is the product detail page
    const isDetailPage = location.pathname.startsWith('/products/');
    
    return !isDetailPage ? (
      <header className="header">
        <h1 className="title">Products</h1>
        <CategoryList setActiveCategory={setActiveCategory} />
      </header>
    ) : null; // Do not render header on detail page
  };

  return (
    <Router>
      <div className="App">
        <Header /> {/* Conditionally rendered header */}
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<ProductList activeCategory={activeCategory} />}
            />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
