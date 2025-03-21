import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite product
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((item) => item.id === product.id)
        ? prevFavorites.filter((item) => item.id !== product.id) // Remove favorites
        : [...prevFavorites, product] // Add  favorites
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
