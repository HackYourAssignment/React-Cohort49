import Navbar from "./Navbar";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import ProductListCard from "./ProductListCard";

const Favorites = () => {
  const [favorites] = useContext(ProductContext);

  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const filteredProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <>
      <Navbar title={"Favorites"} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {filteredProducts.length === 0 && (
        <p>You have not chosen any favorites yet!</p>
      )}
      <ul className="products">
        {filteredProducts.map((product) => (
          <ProductListCard key={product.id} products={product} />
        ))}
      </ul>
    </>
  );
};

export default Favorites;