import React from "react";
import useCategoryStore from "../useCategoryStore";
import categories from "../fake-data/all-categories";

function CategoryList() {
  const { setSelectedCategory } = useCategoryStore();

  const handleCategoryClick = (category) => {
    const cleanCategory = category.replace("FAKE: ", "");
    setSelectedCategory(cleanCategory);
  };

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category.replace("FAKE: ", "")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
