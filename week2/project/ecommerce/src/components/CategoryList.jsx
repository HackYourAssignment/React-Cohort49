import React, { useEffect } from "react";
import useStore from "../store/useStore";

const CategoryList = ({ onSelectCategory }) => {
  const { categories, fetchCategories, isLoading, error } = useStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
