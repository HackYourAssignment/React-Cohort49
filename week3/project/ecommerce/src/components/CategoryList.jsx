import React, { useEffect, useState } from 'react';

function CategoryList({ setActiveCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(null); 

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

  const handleCategoryClick = (category) => {
    setActive(category); 
    setActiveCategory(category); 
  };

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
          onClick={() => handleCategoryClick(category)}
          style={{
            padding: '8px 12px',
            textTransform: 'capitalize',
            color: active === category ? '#007BFF' : '#333', 
            borderBottom: active === category ? '2px solid #007BFF' : '2px solid transparent',
            transition: '0.3s',
          }}
        >
          {category}
        </span>
      ))}
    </nav>
  );
}

export default CategoryList;
