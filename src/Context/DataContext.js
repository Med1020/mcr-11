import React, { createContext, useReducer } from "react";
import DataReducer from "../Reducer/DataReducer";
import { movies } from "../Data";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(DataReducer, movies);
  return (
    <DataContext.Provider value={{ data, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
