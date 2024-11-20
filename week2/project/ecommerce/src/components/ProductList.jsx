import { Link } from "react-router-dom";

const ProductList = ({ products, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="products">
      {products.map((product, i) => (
        <li key={i} className="products__item">
          <Link to={`/product/${product.id}`} state={product.id}>
            <div className="product">
              <img
                src={product.image}
                className="product__image"
                alt={`${product} image`}
              ></img>
              <span className="product__title">{product.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
