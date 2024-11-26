import Categories from "./Categories";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav>
      <h1>Products</h1>
      <NavLink to="/favorites" name="Favorites" className="fav-link" />
      <NavLink to="/" name="Products" className="products-link" />
      <Categories />
    </nav>
  );
};

export default NavBar;
