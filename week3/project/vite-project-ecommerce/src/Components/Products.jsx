import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "./FavouritesContext";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";

const Products = ({ products }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const handleFavourite = (id) => {
    favourites.includes(id) ? removeFavourite(id) : addFavourite(id);
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <h4>{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </Link>

          <button
            onClick={() => handleFavourite(product.id)}
            className="favourite-button"
          >
            <img
              src={favourites.includes(product.id) ? heartSolid : heartRegular}
              alt="favourite icon"
              className="favourite-icon"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
