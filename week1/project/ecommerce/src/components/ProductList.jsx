import { useState } from "react";

const ProductList = ({ products }) => {
  return (
    <ul className="products">
      {products.map((product, i) => (
        <li key={i} className="products__item">
          <div className="product">
            <img
              src={product.image}
              className="product__image"
              alt={`${product} image`}
            ></img>
            <span className="product__title">{product.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
