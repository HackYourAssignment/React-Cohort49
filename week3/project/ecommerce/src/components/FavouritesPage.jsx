import React, { useEffect, useState } from 'react';
import { useFavourites } from '../context/FavouritesContext';

function FavouritesPage() {
  const { favourites } = useFavourites();
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavourites() {
      const fetchedProducts = await Promise.all(
        favourites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
        )
      );
      setFavouriteProducts(fetchedProducts);
      setLoading(false);
    }

    if (favourites.length) fetchFavourites();
  }, [favourites]);

  if (loading) return <p>Loading favourites...</p>;

  return (
    <div>
      {favouriteProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}

export default FavouritesPage;
