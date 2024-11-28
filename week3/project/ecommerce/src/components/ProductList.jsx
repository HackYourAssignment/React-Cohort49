import ProductItem from "./ProductItem";

const ProductList = ({ products, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return <div>Products not found!</div>;
  }

  return (
    <ul className="products">
      {products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))}
    </ul>
  );
};

export default ProductList;
