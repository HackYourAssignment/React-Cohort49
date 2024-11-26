import PropTypes from "prop-types";

const Product = ({ image, title, description, id }) => {
  return (
    <>
      <div className="product" id="product-detail">
        <img className="product-image" src={image} alt={title} />
        <h4 className="product-title" id="title">
          {title}
        </h4>
        <p className="product-description">{description}</p>
      </div>
    </>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Product;
