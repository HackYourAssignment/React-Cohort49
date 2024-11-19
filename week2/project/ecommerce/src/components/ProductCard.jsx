import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/fetch-data";

const ProductCard = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetchProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (product === "error") {
    return <div>Product not found</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-card">
      <div className="product-card-info">
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
      </div>
      <img
        src={product.image}
        alt={product.title}
        className="product-card-img"
      />
    </div>
  );
};

export default ProductCard;
