import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "../comps/ProductCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const fetchedProducts = [];
      for (const id of favorites) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        fetchedProducts.push(product);
      }
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
