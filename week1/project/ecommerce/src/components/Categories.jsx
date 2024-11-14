import PropTypes from "prop-types";
import allCategories from "../fake-data/all-categories";

const Categories = ({ handleSelectCategory }) => {
  const addClassName = (evt) => {
    const allCategoryItems = document.querySelectorAll(".category-item");
    allCategoryItems.forEach((item) => {
      item.classList.remove("selected");
    });
    evt.target.classList.add("selected");
  };

  return (
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
  );
};

Categories.propTypes = {
  handleSelectCategory: PropTypes.func.isRequired,
};

export default Categories;
