import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="content-container">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="rating">Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
      </div>
    </Link>
  );
};

export default ProductCard;
