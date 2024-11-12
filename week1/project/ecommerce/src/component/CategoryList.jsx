function CategoryList({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-buttons">
      <button
        onClick={() => setSelectedCategory("all")}
        className={selectedCategory === "all" ? "active" : ""}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category.replace("FAKE: ", ""))}
          className={
            selectedCategory === category.replace("FAKE: ", "") ? "active" : ""
          }
        >
          {category.replace("FAKE: ", "")}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
