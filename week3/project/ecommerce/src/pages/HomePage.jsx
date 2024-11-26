import React, { useState, useEffect, useCallback } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                const data = await response.json();
                setCategories(["All", ...data]);
            } catch (err) {
                setError("Failed to load categories");
            }
        };
        fetchCategories();
    }, []);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const url = selectedCategory === "All" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${selectedCategory}`;
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
            setError("");
        } catch (err) {
            setError("Failed to load products");
        } finally {
            setLoading(false);
        }
    }, [selectedCategory]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleSelectCategory = category => {
        setSelectedCategory(category);
    };

    if (error) return <p className="error-message">{error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <CategoryList categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
            {loading ? <p className="loading-message">Loading...</p> : <ProductList products={products} />}
        </div>
    );
};

export default HomePage;
