import { useEffect } from "react";
import { useFavorites } from "../../contexts/FavoritesContext";
import useFetch from "../../hooks/useFetch";
import "./Favorites.css";

const Favorites = () => {
    const { favorites } = useFavorites();
    const { data: products, loading, error, fetchData } = useFetch(null, true);

    useEffect(() => {
        if (favorites.length) {
        favorites.forEach((id) => fetchData(`https://fakestoreapi.com/products/${id}`));
        }
    }, [favorites, fetchData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="favorites-container">
        {products?.map((product) => (
            <div key={product.id} className="favorites-card">
            <img src={product.image} 
            alt={product.title} 
            />
            
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            </div>
        ))}
        </div>
    );
};

export default Favorites;
