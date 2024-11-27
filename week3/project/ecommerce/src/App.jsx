import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import FavouritesPage from './components/FavouritesPage'; 

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="title">Products</h1>
          <nav>
            {/* Navigation links */}
            <Link to="/" style={{ marginRight: '10px' }}>
              Home
            </Link>
            <Link to="/favourites" style={{ marginRight: '10px' }}>
              Favourites
            </Link>
          </nav>
          <CategoryList setActiveCategory={setActiveCategory} />
        </header>

        <main className="content">
          <Routes>
            {/* Define routes for different pages */}
            <Route
              path="/"
              element={<ProductList activeCategory={activeCategory} />}
            />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
