import React, { createContext, useContext, useState } from "react";

// Context creation
const SortContext = createContext();

export const useSort = () => useContext(SortContext);

// Sort Context Provider
export const SortProvider = ({ children }) => {
  const [sortOption, setSortOption] = useState("default");

  // Sorting function
  const sortProducts = (products) => {
    switch (sortOption) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      case "name-asc":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };

  return (
    <SortContext.Provider value={{ sortOption, setSortOption, sortProducts }}>
      {children}
    </SortContext.Provider>
  );
};

