/* eslint-disable react/prop-types */
const Categories = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
