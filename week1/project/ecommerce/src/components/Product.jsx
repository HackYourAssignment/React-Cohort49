import PropTypes from "prop-types";
import { useState } from "react";

const Product = ({ image, title }) => {
  const [titleLength, setTitleLength] = useState(false);

  let productName = title;
  if (!titleLength) {
    productName = `${title.substring(0, 40)}...`;
  }

  return (
    <div className="product">
      <img
        style={{ width: "100px", height: "100px", display: "block" }}
        src={image}
        alt={title}
      />
      <h4>{productName}</h4>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
