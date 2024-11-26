function CategoryList({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="category-list">
      <h2>Categories</h2>
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
}

export default CategoryList;
