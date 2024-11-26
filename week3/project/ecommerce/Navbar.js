import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
    </nav>
  );
};

export default Navbar;
