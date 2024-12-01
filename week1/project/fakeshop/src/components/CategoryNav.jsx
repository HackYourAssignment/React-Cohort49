// src/components/CategoryList.jsx
import React from "react";

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
