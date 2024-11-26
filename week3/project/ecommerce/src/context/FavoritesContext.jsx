import React, { createContext, useContext, useReducer, useMemo } from "react";

const initialState = [];

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];
    default:
      return state;
  }
};

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritesState, dispatch] = useReducer(favoritesReducer, initialState);

  const toggleFavorite = (id) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });
  };

  const value = useMemo(
    () => ({
      favorites: favoritesState,
      toggleFavorite,
    }),
    [favoritesState]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
