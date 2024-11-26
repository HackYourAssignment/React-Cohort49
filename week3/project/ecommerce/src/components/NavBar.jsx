import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Products
                </NavLink>
                <NavLink to="/favorites" className={({ isActive }) => (isActive ? "active" : "")}>
                    Favorites
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
