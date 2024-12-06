import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import FavouritesPage from "./components/FavouritesPage";
import { FavouritesProvider } from "./context/FavouritesContext";
import HomePage from "./components/HomePage";

function App() {
  return (
    <FavouritesProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Router>
    </FavouritesProvider>
  );
}

export default App;
