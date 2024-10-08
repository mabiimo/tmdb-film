import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroCard = ({ onCardClick }) => {
  const [movies, setMovies] = useState([]);
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;

  useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${baseurl}/popular`,
      })
      .then((response) => {
        setMovies(response.data.results.slice(0, 5));
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 mt-[-80px]">
      {movies.map((movie) => (
        <div
          className="relative group cursor-pointer hover:opacity-80 transition-opacity duration-300"
          key={movie.id}
          onClick={() => onCardClick(movie)} // Handle click event
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full rounded-lg transition-transform duration-300 group-hover:opacity-70"
          />
          <p className="bg-gradient-to-t from-gray-900 via-transparent to-transparent absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
