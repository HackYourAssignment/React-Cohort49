import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map(({ id, title, image }) => (
        <Product key={id} title={title} image={image} />
      ))}
    </div>
  );
};

export default Products;
