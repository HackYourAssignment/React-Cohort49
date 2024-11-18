import Category from "./Category";
import AllProductsListing from "./AllProductsListing.jsx";
import allCategories from "../fake-data/all-categories.js";
import allProducts from "../fake-data/all-products.js";
import { useState } from "react";

const Categories = () => {
  const normalizeCategoryName = (categoryName) => {
    return categoryName.replace(/^FAKE:\s*/, "").trim();
  };

  const [activeCategory, setActiveCategory] = useState(null);

  // Function to toggle category
  const toggleCategory = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  // Filter products based on active category
  const filteredProducts = activeCategory
    ? allProducts.filter(
        (product) =>
          normalizeCategoryName(product.category) ===
          normalizeCategoryName(activeCategory)
      )
    : allProducts;

  return (
    <div>
      <div className="Categories-container">
        {allCategories.map((category, index) => {
          return (
            <Category
              key={index}
              title={category}
              onClick={toggleCategory}
              isActive={activeCategory === category}
            />
          );
        })}
      </div>

      <AllProductsListing products={filteredProducts} />
    </div>
  );
};

export default Categories;
