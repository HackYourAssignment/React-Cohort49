import { createContext, useState, useContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
