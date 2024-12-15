import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import ProductDetail from "./components/productDetail/ProductDetail";
import Favorites from "./components/favorites/Favorites";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>My E-commerce App</h1>
        </header>
        <Navigation /> {/* Add the Navigation component here */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
