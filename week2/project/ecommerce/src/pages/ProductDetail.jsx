import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
