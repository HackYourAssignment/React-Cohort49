import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="navigation">
        <NavLink to="/" exact activeClassName="active">
            Home
        </NavLink>
        <NavLink to="/favourites" activeClassName="active">
            Favourites
        </NavLink>
        </nav>
    );
};

export default Navigation;
