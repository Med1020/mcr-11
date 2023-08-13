import React, { useContext, useState } from "react";
import "./NewMovie.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import { year } from "../../utils";

const NewMovie = () => {
  const navigate = useNavigate();
  const { dataDispatch } = useContext(DataContext);
  const [addMovie, setAddMovie] = useState({
    title: "",
    year: 2023,
    genre: "",
    rating: 0,
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL: "",
  });
  const submitProduct = () => {
    dataDispatch({ type: "ADD_MOVIE", payload: addMovie });
    navigate("/");
  };
  return (
    <div className="new-movie">
      <form>
        <header>Add New Movie</header>
        <div className="input">
          <label>Title:</label>
          <input type="text"></input>
        </div>
        <div className="input">
          <label>Year:</label>
          <select
            onChange={(e) =>
              setAddMovie({ ...addMovie, title: e.target.value })
            }
          >
            {year.map((eachYear) => (
              <option value={eachYear}>{eachYear}</option>
            ))}
          </select>
        </div>
        <div className="input">
          <label>Genre:</label>
          <input
            type="text"
            onChange={(e) =>
              setAddMovie({ ...addMovie, genre: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Summary: </label>
          <textarea
            onChange={(e) =>
              setAddMovie({ ...addMovie, summary: e.target.value })
            }
          ></textarea>
        </div>
        <div className="input">
          <label>Rating:</label>
          <input
            type="number"
            onChange={(e) =>
              setAddMovie({ ...addMovie, rating: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Director:</label>
          <input
            onChange={(e) =>
              setAddMovie({ ...addMovie, director: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Writer</label>
          <input
            onChange={(e) =>
              setAddMovie({ ...addMovie, writer: e.target.value })
            }
          ></input>
        </div>
        <div className="input">
          <label>Cast:</label>
          <input
            onChange={(e) => setAddMovie({ ...addMovie, cast: e.target.value })}
          ></input>
        </div>

        <div className="input">
          <label>Image URL:</label>
          <input
            onChange={(e) =>
              setAddMovie({ ...addMovie, imageURL: e.target.value })
            }
          ></input>
        </div>
        <button onClick={submitProduct}>Add Product</button>
      </form>
    </div>
  );
};

export default NewMovie;
