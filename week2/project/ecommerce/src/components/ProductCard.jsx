import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Error while fetching the product details.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading product details...</div>;
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
