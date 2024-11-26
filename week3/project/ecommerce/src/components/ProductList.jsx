import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function ProductList({ products }) {
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <div className="products-grid">
      {products.map((product) => {
        const isFavorite = favoriteIds.includes(product.id);

        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => toggleFavorite(product.id)}>
              {isFavorite ? "❤️" : "🤍"} {/* Heart icon */}
            </button>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
