import React, { useEffect, useState } from 'react';

function ProductList({ activeCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = activeCategory
      ? `https://fakestoreapi.com/products/category/${encodeURIComponent(activeCategory)}`
      : 'https://fakestoreapi.com/products';

    setLoading(true);
    setError(null);

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [activeCategory]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              marginBottom: '10px',
            }}
          />
          <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h3>
          <p style={{ color: '#666' }}>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
