import React from 'react';

const CategoryList = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="category-list">
        {categories.map((category) => (
            <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onCategorySelect(category)}
            >
            {category}
            </button>
        ))}
        </div>
    );
};

export default CategoryList;