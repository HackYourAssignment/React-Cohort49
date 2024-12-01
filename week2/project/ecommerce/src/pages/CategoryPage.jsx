import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage.jsx";
import ProductCard from "./ProductCard.jsx";

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  //ferching category and produtcs
  const fetchCategories = async (setCategories, setLoading, setError) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
      );
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products",
      );
      //error handdle
      if (!response.ok) throw new Error("Failed to fetch products");
      //parser
      const data = await response.json();
      //set json as a parameter
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(setCategories, setLoading, setError);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  return (
    <div>
      <h1>Product Categories</h1>
      {/* loading logic */}
      {loading && <Loader />}

      {/* error handle logic */}
      {error && <ErrorMessage message={error} />}
      <ul>
        {/* show category */}
        {categories.map((category) => (
          <li key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
      <div className="product-list">
        {/* show produtcs according to selected  category */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
