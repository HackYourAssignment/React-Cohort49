import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            setNotFound(true);
          } else {
            throw new Error("Error while fetching the product details.");
          }
        } else {
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        setError(error.message || "An unexpected error occurred.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="error_message">Error: {error}</div>;
  }

  if (notFound) {
    return <div className="not_found_message">Product not found.</div>;
  }

  if (!product) {
    return <div className="loading_message">Loading product details...</div>;
  }

  return (
    <div className="product_details">
      <div className="title_container">
        <h1 className="title_container__title">{product.title}</h1>
      </div>
      <div className="product_details__information">
        <div className="product_details__image">
          <div className="product_image__container">
            <img
              className="product__image"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <p className="product_details__description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
