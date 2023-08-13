import React, { createContext, useReducer } from "react";
import FilterReducer from "../Reducer/FilterReducer";

export const FilterContext = createContext();
const FilterContextProvider = ({ children }) => {
  const [filters, filterDispatch] = useReducer(FilterReducer, {
    genre: "All Genre",
    rating: "Rating",
    releaseYear: "Release Year",
  });
  return (
    <FilterContext.Provider value={{ filters, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
