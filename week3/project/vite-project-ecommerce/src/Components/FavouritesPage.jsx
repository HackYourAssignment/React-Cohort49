import React, { useState, useEffect } from "react";
import { useFavourites } from "./FavouritesContext";
import { Link } from "react-router-dom";

const FavouritesPage = () => {
  const { favourites } = useFavourites();
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        setLoading(true);
        const fetchProducts = favourites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json(),
          ),
        );
        const products = await Promise.all(fetchProducts);
        setFavouriteProducts(products);
      } catch (err) {
        setError("Error fetching favourite products:", err);
      } finally {
        setLoading(false);
      }
    };

    if (favourites.length > 0) {
      fetchFavourites();
    } else {
      setLoading(false);
    }

    fetchFavourites();
  }, [favourites]);

  if (loading) return <p>Loading favourites...</p>;
  if (error) return <p>No favourite products yet.</p>;

  return (
    <div className="favourites-page">
      <h2>Your Favourites</h2>
      <div className="products">
        {favouriteProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
