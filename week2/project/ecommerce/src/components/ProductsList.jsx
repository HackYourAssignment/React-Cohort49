import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductsList = ({ products }) => {
  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  if (products === "error") {
    return <p>Error fetching products</p>;
  }

  return (
    <ul className="products">
      {products.map((product) => (
        <li className="products-item" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
