import { useFavourites } from "../context/FavouritesContext";
import { useState, useEffect } from "react";

const FavouritesPage = () => {
  const { favourites } = useFavourites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await Promise.all(
          favourites.map(async (id) => {
            const response = await fetch(
              `https://fakestoreapi.com/products/${id}`
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch product with id: ${id}`);
            }
            return response.json();
          })
        );
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, [favourites]);

  if (loading) return <div className="loading">Loading favourites...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="favourites-page">
      <h1>Your Favourites</h1>
      <ul className="favourites-page__list">
        {products.map((product) => (
          <li key={product.id} className="favourites-page__item">
            <img
              src={product.image}
              alt={product.title}
              className="favourites-page__image"
            />
            <p className="favourites-page__title">{product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
