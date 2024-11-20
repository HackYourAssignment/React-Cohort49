import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Error while fetching the categories.");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
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

export default Product;
