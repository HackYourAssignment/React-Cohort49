import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api/fetch-data";

const Categories = ({ handleSelectCategory }) => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setAllCategories(data);
    });
  }, []);

  const addClassName = (evt) => {
    const allCategoryItems = document.querySelectorAll(".category-item");
    allCategoryItems.forEach((item) => {
      item.classList.remove("selected");
    });
    evt.target.classList.add("selected");
  };

  if (allCategories.length === 0) {
    return <p>Loading...</p>;
  }

  if (allCategories === "error") {
    return <p>Error fetching categories</p>;
  }

  return (
    <>
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
