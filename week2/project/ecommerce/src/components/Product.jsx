import PropTypes from "prop-types";

const Product = ({ image, title, description }) => {
  return (
    <div className="product" id="product-detail">
      <img className="product-image" src={image} alt={title} />
      <h4 className="product-title" id="title">
        {title}
      </h4>
      <p className="product-description">{description}</p>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
