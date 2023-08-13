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
      console.log(filters.genre);
      return filters.genre === "All Genre"
        ? movies
        : movies.filter(({ genre }) => genre.includes(filters.genre));
    },
    [filters.genre]
  );

  const filterByRating = useCallback(
    (movies) => {
      console.log(filters.rating);
      return filters.rating === "Rating"
        ? movies
        : movies.filter(
            ({ rating }) => Number(rating) === Number(filters.rating)
          );
    },
    [filters.rating]
  );

  const filterByYear = useCallback(
    (movies) => {
      return filters.releaseYear === "Release Year"
        ? movies
        : movies.filter(
            ({ year }) => Number(year) === Number(filters.releaseYear)
          );
    },
    [filters]
  );
  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("item"));
    let result = localStorageData || data;
    result = filterByGenre(result);
    result = filterByRating(result);
    result = filterByYear(result);
    setFilteredMovies(result);
  }, [data, filterByGenre, filterByRating, filterByYear]);

  console.log(filteredMovies);
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
