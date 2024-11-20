import React from 'react';
import categories from '../fake-data/all-categories';

function CategoryList({ activeCategory, setActiveCategory }) {
  return (
    <nav style={{
      display: 'flex',
      gap: '15px',
      cursor: 'pointer',
      overflowX: 'auto',
    }}>
      {categories.map((category, index) => {
        const isActive = activeCategory === category;
        return (
          <span
            key={index}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '8px 12px',
              textTransform: 'capitalize',
              color: isActive ? '#007BFF' : '#333', // Active color
              borderBottom: isActive ? '2px solid #007BFF' : '2px solid transparent', // Active border
              transition: '0.3s',
            }}
            onMouseOver={(e) => {
              if (!isActive) e.target.style.borderBottom = '2px solid #555';
            }}
            onMouseOut={(e) => {
              if (!isActive) e.target.style.borderBottom = '2px solid transparent';
            }}
          >
            {category.replace('FAKE: ', '')}
          </span>
        );
      })}
    </nav>
  );
}

export default CategoryList;
