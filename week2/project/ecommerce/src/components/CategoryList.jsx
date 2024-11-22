const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  loading,
  error,
}) => {
  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <ul className="categories">
      {categories.map((category) => (
        <li
          key={category}
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
