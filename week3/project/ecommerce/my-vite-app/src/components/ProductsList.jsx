import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
import ProductListCard from "./ProductListCard";

const ProductsList = ({ category }) => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="products">
      {products.map((product) => (
        <ProductListCard key={product.id} products={product} />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  category: PropTypes.string,
};

export default ProductsList;