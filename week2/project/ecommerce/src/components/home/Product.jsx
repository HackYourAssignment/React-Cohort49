import { Link } from 'react-router-dom';

const Product = ({ id, title, image }) => {
  const productPath = `product/${id}`;

  return (
    <div className="product">
      <Link to={productPath}>
        <div className="image-wrapper">
          <img className="product-image" src={image} alt={title} />
        </div>
      </Link>
      <Link to={productPath}>
        <h3 className="product-title">{title}</h3>
      </Link>
    </div>
  );
};

export default Product;
