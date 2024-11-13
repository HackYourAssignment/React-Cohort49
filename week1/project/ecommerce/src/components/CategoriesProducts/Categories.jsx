import React from 'react';
import Category from './Category';

const Categories = ({ categories, currentCategory, changeCurrentCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Category
          key={category.id}
          name={category.name}
          isCurrent={category.name === currentCategory}
          changeCurrentCategory={changeCurrentCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
