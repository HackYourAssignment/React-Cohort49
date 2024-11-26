import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";

function ProductDetailPage() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  const isFavorite = favoriteIds.includes(parseInt(id));

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}

export default ProductDetailPage;
