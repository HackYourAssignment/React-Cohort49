import { useState } from "react";

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <ul className="categories">
      {categories.map((category, i) => (
        <li
          key={i}
          className={`categories__item ${
            selectedCategory === category ? "categories__item__selected" : ""
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
