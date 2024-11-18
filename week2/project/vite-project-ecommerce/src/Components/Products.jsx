/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <h4>{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
