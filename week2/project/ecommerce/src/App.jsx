

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
