import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, className, name }) => {
  return (
    <Link to={to} className={className}>
      {name}
    </Link>
  );
};

export default NavLink;
