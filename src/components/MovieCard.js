import React from "react";
import Image from "../assets/image.png";

const MovieCard = ({ movie, onSelectMovie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "5px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={() => onSelectMovie(movie)}
    >
      <img
        src={Image}
        alt={movie.movie}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div>
        <h3>{movie.movie}</h3>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
