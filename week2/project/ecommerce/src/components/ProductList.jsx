import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";

const ProductList = ({ products, loading, error }) => {
  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id} className="products__item">
          <div className="product">
            <FavouriteButton productId={product.id} />
            <Link to={`/product/${product.id}`} state={product.id}>
              <img
                src={product.image}
                className="product__image"
                alt={`${product.title} image`}
              />
              <span className="product__title">{product.title}</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
