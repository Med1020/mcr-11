import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <Link to="/">IMDB</Link>{" "}
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search movies by title, cast and director..."
        ></input>
      </div>
      <div className="others">
        <p>
          <Link to="/">Movies</Link>
        </p>
        <p>
          <Link to="/watchlist">Watch List</Link>
        </p>
        <p>
          <Link to="/starredMovies">Starred Movies</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
