import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import NavLink from "../components/NavLink";
import FavHeart from "../components/FavHeart";

const Favorites = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const { favoriteIds } = useContext(FavoritesContext);

  // Filter to get the favorite products
  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  // Navigate to the product detail page
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="Fav-page">
      <h2>Favorites</h2>
      <NavLink to="/favorites" name={"Favorites"} className={"fav-link"} />
      <NavLink to="/" name={"Products"} className={"products-link"} />

      <div className="favorites-list">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <div
              key={product.id}
              style={{ cursor: "pointer", position: "relative" }}
              onClick={() => handleProductClick(product.id)}
            >
              <Product
                id={product.id}
                title={product.title}
                image={product.image}
              />

              <div
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className="favorite"
              >
                <FavHeart productId={product.id} />
              </div>
            </div>
          ))
        ) : (
          <p>No favorite products added yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
