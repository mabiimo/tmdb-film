import React, { useState, useEffect } from "react";
import axios from "axios";
import PosterCard from "./PosterCard";
import fetchMovies from "../helper/fetchMovies";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies("now_playing");
      setMovies(movieData);
    };

    loadMovies();
  }, []);
  return (
    <div className="p-10">
      <p className="text-left mb-4 text-white poppins-bold text-lg">
        Now Playing
      </p>
      <div className="grid grid-cols-6 gap-4">
        {movies.map((movie) => (
          <PosterCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
