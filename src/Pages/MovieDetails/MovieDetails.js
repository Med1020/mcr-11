import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieName } = useParams();
  const { data } = useContext(DataContext);
  const selectedMovie = data.filter(({ title }) => title === movieName);
  return (
    <div className="details">
      {selectedMovie.map(
        ({
          title,
          year,
          genre,
          rating,
          director,
          writer,
          cast,
          summary,
          imageURL,
        }) => (
          <div className="content">
            <div className="content-iamge">
              <img src={imageURL} alt={title} width="400px" />
            </div>
            <div className="content-details">
              <header>{title}</header>
              <p>{summary}</p>
              <p>Year: {year}</p>
              <p>Genre: {genre.map((g) => g)}</p>
              <p>Rating: {rating}</p>
              <p>Director: {director}</p>
              <p>Writer: {writer}</p>
              <p>Cast: {cast.map((member) => member)}</p>
              <div className="content-btn">
                <button>Star</button>
                <button>Add to Watchlist</button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MovieDetails;
