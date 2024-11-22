import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetailPage() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetailPage;
