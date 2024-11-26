import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addToFavorites = (id) => {
    if (!favoriteIds.includes(id)) {
      setFavoriteIds((prev) => [...prev, id]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavoriteIds((prev) => prev.filter((favId) => favId !== id));
  };

  const isFavorite = (id) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
