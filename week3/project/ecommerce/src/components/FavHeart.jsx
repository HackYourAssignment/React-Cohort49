import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const FavHeart = ({ productId }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const toggleFavorites = () => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };
  return (
    <button onClick={toggleFavorites} className="favorite">
      <img
        src={isFavorite(productId) ? heartSolid : heartRegular}
        alt="favorite"
        tabIndex="-1"
      />
    </button>
  );
};

export default FavHeart;
