import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";

function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const urls = favoriteIds.map((id) => `https://fakestoreapi.com/products/${id}`);
  const { data: products, loading, error } = useFetch(urls);

  if (loading) return <div>Loading favorites...</div>;
  if (error) return <div>Error loading favorites</div>;
  if (!products || products.length === 0) return <div>No favorites yet!</div>;

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
