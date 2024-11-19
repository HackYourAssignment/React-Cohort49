import { useParams } from 'react-router-dom';
import useLoader from '../hooks/useLoader';
import { CircularProgress } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();

  const [error, product] = useLoader(id);

  if (error) throw error;
  if (!product) return <CircularProgress size="3rem" />;

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-price">${product.price}</div>
        <div className="product-category">
          Category: <strong>{product.category}</strong>
        </div>
        <div className="product-rating">
          <span>
            Rating: <strong>{product.rating?.rate}</strong> / 5
          </span>
          <span> ({product.rating?.count} reviews)</span>
        </div>

        <p className="product-description">{product.description}</p>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

/*
 "id": 14,  
 "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",  
 "price": 999.99,  
 "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",  
 "category": "electronics",  
 "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",  
 "rating": {    "rate": 2.2,    "count": 140  } 
 */
