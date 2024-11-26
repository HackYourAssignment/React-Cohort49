import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { favorites, toggleFavorite } = useFavorites();

    const isFavorite = product ? favorites.includes(product.id) : false;

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error("Product not found");
                const data = await response.json();
                setProduct(data);
                setError(null);
            } catch (err) {
                setError("Failed to load product details");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (error) return <p className="error-message">{error}</p>;
    if (loading) return <p className="loading-message">Loading...</p>;
    if (!product) return <p className="error-message">Product not found.</p>;

    return (
        <div className="product-detail">
            <div className="favorite-container" onClick={() => toggleFavorite(product.id)}>
                <img
                    src={isFavorite ? "/assets/heart-solid.svg" : "/assets/heart-regular.svg"}
                    alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    className="favorite-icon"
                />
            </div>

            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} className="product-detail-image" />
        </div>
    );
};

export default ProductDetailPage;
