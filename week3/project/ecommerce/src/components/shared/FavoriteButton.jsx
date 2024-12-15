import PropTypes from "prop-types";
import { useFavorites } from "../../contexts/FavoritesContext";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";
import "./FavoriteButton.css";

const FavoriteButton = ({ id }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorited = favorites.includes(id);

    return (
        <button
            className="favorite-button"
            onClick={() => toggleFavorite(id)}
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
            <img
                src={isFavorited ? heartSolid : heartRegular}
                alt={isFavorited ? "Favorited" : "Not Favorited"}
            />
        </button>
    );
};

FavoriteButton.propTypes = {
    id: PropTypes.number.isRequired,
    
};

export default FavoriteButton;
