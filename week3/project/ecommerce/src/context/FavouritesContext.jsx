import React, { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(id)
        ? prevFavourites.filter((favId) => favId !== id)
        : [...prevFavourites, id]
    );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}