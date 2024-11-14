function CategoryList({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-buttons">
      <button
        onClick={() => setSelectedCategory("all")}
        className={selectedCategory === "all" ? "active" : ""}
      >
        All
      </button>
      {categories.map((category, index) => {
        const cleanCategory = category.replace("FAKE: ", "");
        return (
          <button
            key={index}
            onClick={() => setSelectedCategory(cleanCategory)}
            className={selectedCategory === cleanCategory ? "active" : ""}
          >
            {cleanCategory}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
