import React, { useEffect } from "react";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

const ProductList = ({ selectedCategory }) => {
  const { products, fetchProducts, isLoading, error } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory, fetchProducts]);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
