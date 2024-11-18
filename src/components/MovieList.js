import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "15px",
        padding: "15px",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </div>
  );
};

export default MovieList;
