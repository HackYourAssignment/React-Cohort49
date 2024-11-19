import Category from "./Category";
import AllProductsListing from "./AllProductsListing";
import { useState, useEffect } from "react";

// fetch categories
const fetchCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await response.json();
  return categories;
};

const fetchAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products;
};

//fetch products by category
const fetchProductsByCategory = async (category) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }
  const products = await response.json();
  return products;
};

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories and products on component mount
    const initializeData = async () => {
      try {
        setIsLoadingCategories(true);
        const categories = await fetchCategories();
        setAllCategories(categories);

        const products = await fetchAllProducts();
        setFilteredProducts(products);
      } catch (error) {
        setError("Failed to fetch Categories or Products");
      } finally {
        setIsLoadingCategories(false);
      }
    };

    initializeData();
  }, []);

  const toggleCategory = async (category) => {
    setIsLoadingProducts(true);
    try {
      if (activeCategory === category) {
        setActiveCategory(null);
        const products = await fetchAllProducts();
        setFilteredProducts(products);
      } else {
        setActiveCategory(category);
        const products = await fetchProductsByCategory(category);
        setFilteredProducts(products);
      }
    } catch (error) {
      setError("Failed to fetch products by category");
    } finally {
      setIsLoadingProducts(false);
    }
  };

  return (
    <div>
      <div className="Categories-container">
        {isLoadingCategories ? (
          <div>Loading Categories...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          allCategories.map((category, index) => (
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
