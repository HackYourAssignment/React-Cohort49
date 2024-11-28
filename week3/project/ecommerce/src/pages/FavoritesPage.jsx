import { useMemo } from "react";
import "../App.css";
import { useFavorite } from "../context/FavoriteContext";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

function HomePage() {
  const { favorites } = useFavorite();

  const urls = useMemo(
    () => favorites.map((id) => `https://fakestoreapi.com/products/${id}`),
    [favorites]
  );

  const { data: products, error, loading } = useFetch(urls);

  return (
    <>
      <Header title="Favorites" />

      <div>
        {favorites.length > 0 ? (
          <ProductList products={products} loading={loading} error={error} />
        ) : (
          <p>You have not chosen any favorites yet!</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
