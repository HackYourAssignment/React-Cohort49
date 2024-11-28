import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import { FavoriteProvider } from "./context/FavoriteContext.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites/" element={<FavoritesPage />} />
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
