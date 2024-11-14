import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
        {products.map((product) => (
            <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            </div>
        ))}
        </div>
    );
};

export default ProductList;