import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="product-card">
      <div
        className="favorite-container"
        onClick={() => toggleFavorite(product.id)}
      >
        <img
          src={
            isFavorite ? "/assets/heart-solid.svg" : "/assets/heart-regular.svg"
          }
          alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="favorite-icon"
        />
      </div>
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="content-container">
          <h2 className="product-title">{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="rating">
            Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
