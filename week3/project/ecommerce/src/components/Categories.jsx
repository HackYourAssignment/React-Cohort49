import Category from "./Category";
import AllProductsListing from "./AllProductsListing";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

const Categories = () => {
  const {
    toggleCategory,
    activeCategory,
    isLoadingCategories,
    isLoadingProducts,
    error,
    filteredProducts,
    categories,
  } = useContext(ProductContext);

  return (
    <div>
      <div className="Categories-container">
        {isLoadingCategories ? (
          <div>Loading Categories...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          categories.map((category, index) => (
            <Category
              key={index}
              title={category}
              onClick={() => toggleCategory(category)}
              isActive={activeCategory === category}
            />
          ))
        )}
      </div>

      {isLoadingProducts ? (
        <div>Loading Products...</div>
      ) : (
        <AllProductsListing products={filteredProducts} />
      )}
    </div>
  );
};

export default Categories;
