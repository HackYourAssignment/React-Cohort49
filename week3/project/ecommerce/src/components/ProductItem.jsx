import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { useFavorite } from "../context/FavoriteContext";

const ProductItem = ({ product }) => {
  const { isFavorite, toggleFavorite } = useFavorite();

  return (
    <li className="products__item">
      <Link to={`/product/${product.id}`} state={product.id}>
        <div className="product">
          <div className="product_image__container">
            <img className="product__image" src={product.image} />
            <div className="product_image__favourite_container">
              <img
                className="product_image__favourite"
                src={isFavorite(product.id) ? heartSolid : heartRegular}
                onClick={(e) => toggleFavorite(e, product.id)}
              />
            </div>
          </div>
          <span className="product__title" title={product.title}>
            {product.title}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
