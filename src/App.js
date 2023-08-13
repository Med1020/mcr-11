import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Navbar from "./Components/Navbar/Navbar";
import StarredMovies from "./Pages/StarredMovies/StarredMovies";
import WatchList from "./Pages/WatchList/WatchList";
import NewMovie from "./Pages/NewMovie/NewMovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieName" element={<MovieDetails />} />
        <Route path="/starredMovie" element={<StarredMovies />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/newMovie" element={<NewMovie />} />
      </Routes>
    </div>
  );
}

export default App;
