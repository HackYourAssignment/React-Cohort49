import { Link } from "react-router-dom";
import FavButton from "./FavButton";
import PropTypes from "prop-types";

const ProductListCard = ({ products }) => {
  const { id, image, title } = products;
  return (
    <li className="products-item">
      <FavButton id={id} />
      <Link to={`/product/${id}`}>
        <img className="products-item-img" src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

ProductListCard.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductListCard;