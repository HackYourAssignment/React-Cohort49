import Product from "./Product";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FavHeart from "./FavHeart";

const AllProductsListing = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="all-products-container">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product.id)}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <Product title={product.title} image={product.image} />
          {/* Favorite Icon */}
          <div
            onClick={(event) => {
              event.stopPropagation(); // Prevent parent click
            }}
            className="favorite"
          >
            <FavHeart productId={product.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

AllProductsListing.propTypes = {
  products: PropTypes.array.isRequired,
};

export default AllProductsListing;
