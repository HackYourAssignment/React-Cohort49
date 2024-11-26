import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "../comps/ProductCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const fetchedProducts = await Promise.all(
        favorites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        )
      );
      setProducts(fetchedProducts);
    };

    if (favorites.length > 0) fetchFavorites();
  }, [favorites]);

  if (favorites.length === 0) return <p>No favorite products yet!</p>;

  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
