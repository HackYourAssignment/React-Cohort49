import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";

const Categories = ({ handleSelectCategory }) => {
  const {
    data: allCategories,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products/categories");

  const addClassName = (evt) => {
    const allCategoryItems = document.querySelectorAll(".category-item");
    allCategoryItems.forEach((item) => {
      item.classList.remove("selected");
    });
    evt.target.classList.add("selected");
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching categories</p>}
      <ul className="category">
        {allCategories.map((category, index) => (
          <li
            onClick={() => handleSelectCategory(category)}
            onClickCapture={addClassName}
            className="category-item"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  );
};

Categories.propTypes = {
  handleSelectCategory: PropTypes.func.isRequired,
};

export default Categories;