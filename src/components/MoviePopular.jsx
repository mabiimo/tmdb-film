import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PosterCard from "./PosterCard";
import fetchMovies from "../helper/fetchMovies";

const MoviePopular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies("popular");
      setMovies(movieData);
    };

    loadMovies();
  }, []);
  

  return (
    <div className="p-10 ">
      <p className="text-left mb-4 text-white poppins-bold text-lg">Popular</p>
      <div className="grid grid-cols-6">
        {movies.map((movie) => (
         <PosterCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default MoviePopular;
