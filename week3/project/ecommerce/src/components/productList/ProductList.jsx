import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import FavoriteButton from "../shared/FavoriteButton";
import "./ProductList.css";

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data: products, loading, error } = useFetch(
        selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : "https://fakestoreapi.com/products"
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
        <div className="category-selector">
            <button onClick={() => handleCategoryChange(null)}>All</button>
            <button onClick={() => handleCategoryChange("electronics")}>
            Electronics
            </button>
            <button onClick={() => handleCategoryChange("jewelery")}>
            Jewelry
            </button>
            <button onClick={() => handleCategoryChange("men's clothing")}>
            Men's Clothing
            </button>
            <button onClick={() => handleCategoryChange("women's clothing")}>
            Women's Clothing
            </button>
        </div>
        <div className="product-list">
            {products?.map((product) => (
            <div key={product.id} className="product-card">
                <FavoriteButton id={product.id} />
                <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
};

export default ProductList;
