import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, summary, imageURL } = movie;
  return (
    <div className="card" key={id}>
      <Link to={`/${title}`}>
        <img
          src={imageURL}
          alt={title}
          width="250px"
          className="movie-poster"
        />
        <div className="card-details">
          <p className="title">{title}</p>
          <p style={{ color: "black" }}>{summary}</p>
          <div className="buttons">
            <button>Star</button>
            <button>Add to Watchlist</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
