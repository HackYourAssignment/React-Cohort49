import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

// Hook to access FavoritesContext
export const useFavorites = () => useContext(FavoritesContext);

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (id) => {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favId) => favId !== id) // Remove
        : [...prevIds, id] // Add
    );
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
