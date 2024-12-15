import PropTypes from "prop-types";
import heartIcon from "../assets/heart-regular.svg";
import favoriteHeartIcon from "../assets/heart-solid.svg";
import { useState } from "react";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

const FavButton = ({ id }) => {
  const [favorites, setFavorites] = useContext(ProductContext);
  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(id) ? true : false
  );

  const addToFavoriteHandler = () => {
    if (!isFavorite) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    }
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <button className="fav-btn" onClick={addToFavoriteHandler}>
      <img
        src={isFavorite ? favoriteHeartIcon : heartIcon}
        alt="heart"
        className="img-fav"
      />
    </button>
  );
};

FavButton.propTypes = {
  id: PropTypes.number,
};

export default FavButton;