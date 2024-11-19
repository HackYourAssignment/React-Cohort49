import PropTypes from "prop-types";

const Product = ({ image, title }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h4 className="product-title">{title}</h4>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
