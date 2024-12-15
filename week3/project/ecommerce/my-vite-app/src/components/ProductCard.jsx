import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import FavButton from "./FavButton";

const ProductCard = () => {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products/" + id);

  return (
    <div>
      <Navbar title={product.title} />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching product</p>}
      {product && (
        <div className="product-card">
          <div className="product-card-info">
            <p>{product.description}</p>
          </div>
          <img
            src={product.image}
            alt={product.title}
            className="product-card-img"
          />{" "}
          <FavButton id={parseInt(id)} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;