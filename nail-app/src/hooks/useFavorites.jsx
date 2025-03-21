import { useState, useEffect } from "react";

const useFavorites = () => {
  // Load favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((item) => item.id === product.id)
        ? prevFavorites.filter((item) => item.id !== product.id)
        : [...prevFavorites, product]
    );
  };

  // Check if a product is in favorites
  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
