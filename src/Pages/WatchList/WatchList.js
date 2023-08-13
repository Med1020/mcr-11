import React, { useContext } from "react";
import { WatchListContext } from "../../Context/WatchlistContext";
import MovieCard from "../../Components/MovieCard/MovieCard";

const WatchList = () => {
  const { WatchList } = useContext(WatchListContext);
  return (
    <div>
      <header>WatchList</header>
      {WatchList.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default WatchList;
