import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import FavouritesPage from "./Components/FavouritesPage";
import { FavouritesProvider } from "./Components/FavouritesContext";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories",
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(["All", ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const endPoint =
          selectedCategory === "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;

        const response = await fetch(endPoint);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <FavouritesProvider>
      <Router>
        <div className="app">
          <nav className="navbar">
            <Link to="/">Home</Link> | <Link to="/favourites">Favourites</Link>
          </nav>
          <h1>Products</h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading && <p>Loading...</p>}
                  {error && <p className="error">{error}</p>}
                  {!loading && !error && (
                    <>
                      <Categories
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategorySelect={setSelectedCategory}
                      />
                      <Products products={products} />
                    </>
                  )}
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavouritesProvider>
  );
}

export default App;
