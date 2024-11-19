import React, { useEffect, useState } from 'react';

function CategoryList({ setActiveCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <nav style={{
      display: 'flex',
      gap: '15px',
      cursor: 'pointer',
      overflowX: 'auto',
    }}>
      {categories.map((category, index) => (
        <span
          key={index}
          onClick={() => setActiveCategory(category)}
          style={{
            padding: '8px 12px',
            textTransform: 'capitalize',
            color: '#333',
            borderBottom: '2px solid transparent',
            transition: '0.3s',
          }}
          onMouseOver={(e) => e.target.style.borderBottom = '2px solid #555'}
          onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}
        >
          {category}
        </span>
      ))}
    </nav>
  );
}

export default CategoryList;
