import React from 'react';
import { useFavourites } from '../context/FavouritesContext';
import useFetch from '../hooks/useFetch'; 
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

function ProductList({ activeCategory }) {
  const endpoint = activeCategory
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(activeCategory)}`
    : 'https://fakestoreapi.com/products';

  const { data: products, loading, error } = useFetch(endpoint);

  const { favourites, toggleFavourite } = useFavourites();

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
          {/* heart toggle */}
          <img
            src={favourites.includes(product.id) ? heartSolid : heartRegular}
            alt={favourites.includes(product.id) ? 'Remove from favourites' : 'Add to favourites'}
            onClick={() => toggleFavourite(product.id)}
            style={{
              cursor: 'pointer',
              width: '24px',
              height: '24px',
              marginTop: '10px',
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
