import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Favorites from "./components/Favorites.jsx";
import { ProductProvider } from "./components/ProductContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </ProductProvider>
    </Router>
  </StrictMode>
);