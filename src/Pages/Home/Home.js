import React, { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Home.css";
import FilterBar from "../../Components/FilterBar/FilterBar";
import { FilterContext } from "../../Context/FilterContext";

const Home = () => {
  const { data } = useContext(DataContext);
  const { filters } = useContext(FilterContext);
  const [filteredMovies, setFilteredMovies] = useState(data);

  const filterByGenre = useCallback(
    (movies) => {
      return filters.genre === "All Genre"
        ? movies
        : movies.filter(({ genre }) => genre === filters.genre);
    },
    [filters]
  );

  const filterByRating = useCallback(
    (movies) => {
      return filters.rating === "Rating"
        ? movies
        : movies.filter(({ rating }) => rating === filters.rating);
    },
    [filters]
  );

  const filterByYear = useCallback(
    (movies) => {
      return filters.releaseYear === "Release Year"
        ? movies
        : movies.filter(({ year }) => year === filters.releaseYear);
    },
    [filters]
  );
  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("item"));
    let result = filterByGenre(localStorageData);
    result = filterByRating(result);
    result = filterByYear(result);
    setFilteredMovies(result || data);
  }, [data, filterByGenre, filterByRating, filterByYear]);

  return (
    <div className="home">
      <FilterBar />
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
