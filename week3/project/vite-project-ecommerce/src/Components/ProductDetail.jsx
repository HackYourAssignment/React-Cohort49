import { useParams } from "react-router-dom";
import { useFetch } from "../Components/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <div className="product-details">
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "400px" }}
          />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
