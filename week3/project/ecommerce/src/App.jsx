import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";
import ProductProvider from "./context/ProductProvider";
import FavoritesProvider from "./context/FavoritesContext";

function App() {
  return (
    <div className="main-Page">
      <ProductProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
