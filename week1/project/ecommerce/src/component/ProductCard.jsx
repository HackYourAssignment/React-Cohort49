import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
}

export default ProductCard;
