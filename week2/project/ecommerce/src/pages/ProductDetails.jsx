import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const fetchProductDetails = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return await response.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setIsLoading(true);
        const productData = await fetchProductDetails(id);
        setProduct(productData);
      } catch (error) {
        setError("Failed to fetch product details");
      } finally {
        setIsLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  return (
    <div>
      {isLoading && <p>Loading product details...</p>}
      {error && <div className="error">{error}</div>}
      {product && (
        <div className="product-detail">
          <p className="product-title">{product.title}</p>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <p className="product-description">{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
