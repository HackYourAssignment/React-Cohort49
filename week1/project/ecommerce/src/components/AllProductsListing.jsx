import Product from "./product.jsx";
import PropTypes from "prop-types";

const AllProductsListing = ({ products }) => {
  return (
    <div className="all-products-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
          ></Product>
        );
      })}
    </div>
  );
};

AllProductsListing.propTypes = {
  products: PropTypes.array.isRequired,
};

export default AllProductsListing;
