import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PosterCard from "./PosterCard";
import fetchMovies from "../helper/fetchMovies";

const MovieTopRated = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies("top_rated");
      setMovies(movieData);
    };

    loadMovies();
  }, []);

  return (
    <div className="p-5 md:p-10">
    <p className="text-left mb-4 text-white poppins-bold text-lg">
      Top Rated
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((movie) => (
        <PosterCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
  
  );
};

export default MovieTopRated;
