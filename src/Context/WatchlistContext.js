import React, { createContext, useReducer } from "react";
import WatchListReducer from "../Reducer/WatchListReducer";

export const WatchListContext = createContext();
const WatchlistContextProvider = ({ children }) => {
  const [watchlist, watchlistDispatch] = useReducer(WatchListReducer, []);
  return (
    <WatchListContext.Provider value={{ watchlist, watchlistDispatch }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchlistContextProvider;
