import React from 'react';

const Product = ({ title, image }) => {
  return (
    <div className="product">
      <div className="image-wrapper">
        <img className="product-image" src={image} alt={title} />
      </div>
      <h3 className="product-title">{title}</h3>
    </div>
  );
};

export default Product;
