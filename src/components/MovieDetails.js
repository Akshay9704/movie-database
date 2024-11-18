import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to List</button>
      <h2>{movie.title}</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
    </div>
  );
};

export default MovieDetails;
