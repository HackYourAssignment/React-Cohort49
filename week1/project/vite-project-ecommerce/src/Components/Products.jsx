/* eslint-disable react/prop-types */
const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h4>{product.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Products;
