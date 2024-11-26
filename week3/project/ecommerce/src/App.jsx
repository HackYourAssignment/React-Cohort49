import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";
import "./styles/index.css";

const App = () => {
    return (
        <FavoritesProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
