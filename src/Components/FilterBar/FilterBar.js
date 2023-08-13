import React, { useContext } from "react";
import "./FilterBar.css";
import { genre, rating, year } from "../../utils";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Context/FilterContext";

const FilterBar = () => {
  const { filterDispatch } = useContext(FilterContext);
  const changeGenre = (e) => {
    filterDispatch({ type: "GENRE", payload: e.target.value });
  };
  const changeRating = (e) => {
    filterDispatch({ type: "RATING", payload: e.target.value });
  };
  const changeYear = (e) => {
    filterDispatch({ type: "YEAR", payload: e.target.value });
  };
  return (
    <div className="filter">
      <header>Movies</header>
      <select onChange={changeGenre}>
        {genre.map((eachGenre) => (
          <option value={eachGenre}>{eachGenre}</option>
        ))}
      </select>
      <select onChange={changeRating}>
        {rating.map((eachRating) => (
          <option value={eachRating}>{eachRating}</option>
        ))}
      </select>
      <select onChange={changeYear}>
        {year.map((eachYear) => (
          <option value={eachYear}>{eachYear}</option>
        ))}
      </select>
      <button>
        <Link to="/newMovie">Add a Movie</Link>
      </button>
    </div>
  );
};

export default FilterBar;
