import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";

const Header = ({ title }) => {
  const { favorites } = useFavorite();

  return (
    <div className="title_container">
      <h1 className="title_container__title">{title}</h1>
      <div className="nav">
        <Link className="nav-link" to={`/`}>
          Products
        </Link>
        <Link className="nav-link" to={`/favorites`}>
          Favorites ({favorites.length})
        </Link>
      </div>
    </div>
  );
};

export default Header;
