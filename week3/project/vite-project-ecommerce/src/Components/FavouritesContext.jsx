import React, { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (id) => {
    if (!favourites.includes(id)) {
      setFavourites([...favourites, id]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((favId) => favId !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
