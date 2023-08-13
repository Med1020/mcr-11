import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./Context/DataContext";
import FilterContextProvider from "./Context/FilterContext";
import WatchlistContextProvider from "./Context/WatchlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <FilterContextProvider>
          <WatchlistContextProvider>
            <App />
          </WatchlistContextProvider>
        </FilterContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
