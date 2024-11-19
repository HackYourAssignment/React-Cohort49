import Product from "./Product";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AllProductsListing = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="all-products-container">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            onClick={() => handleClick(product.id)}
            style={{ cursor: "pointer" }}
          >
            <Product
              key={product.id}
              title={product.title}
              image={product.image}
            ></Product>
          </div>
        );
      })}
    </div>
  );
};

AllProductsListing.propTypes = {
  products: PropTypes.array.isRequired,
};

export default AllProductsListing;
