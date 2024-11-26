import React, { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

// Fetch categories
const fetchCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await response.json();
  return categories;
};

// Fetch all products
const fetchAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await response.json();
  return products;
};

// Fetch products by category
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

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoadingCategories(true);
        const categories = await fetchCategories();
        setCategories(categories);

        const products = await fetchAllProducts();
        setProducts(products);
        setFilteredProducts(products); // Set all products as default
      } catch (error) {
        setError("Failed to fetch Categories or Products");
      } finally {
        setIsLoadingCategories(false);
      }
    };

    initializeData();
  }, []);

  // Function to handle category toggle and product filtering
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
    <ProductContext.Provider
      value={{
        products,
        categories,
        filteredProducts,
        activeCategory,
        isLoadingCategories,
        isLoadingProducts,
        error,
        toggleCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
