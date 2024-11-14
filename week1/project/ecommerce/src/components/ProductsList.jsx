import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  return (
    <ul className="products">
      {products.map((product) => (
        <li className="products-item" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
