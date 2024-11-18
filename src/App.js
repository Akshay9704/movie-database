import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://dummyapi.online/api/movies");
        console.log(response.data); 
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.movie && movie.movie.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <header style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Movie Database</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: "50%", padding: "15px", margin: "10px" }}
        />
      </header>
      <main>
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <MovieList movies={filteredMovies} onSelectMovie={setSelectedMovie} />
        )}
      </main>
    </div>
  );
};

export default App;
