import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductsList";
import ProductDetailPage from "./pages/ProdutcDetailPage";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <CategoryList onSelectCategory={setSelectedCategory} />
              <ProductList selectedCategory={selectedCategory} />
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
