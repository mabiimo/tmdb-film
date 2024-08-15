import React, { useState, useEffect } from "react";
import HeroCard from "./HeroCard";
import axios from "axios";
import fetchMovies from "../helper/fetchMovies";
import FetchGenre from "../helper/FetchGenre";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenre = async () => {
      const fetchGenre = await FetchGenre("list");
      setGenres(fetchGenre);
    };
    loadGenre();

    const loadMovies = async () => {
      const movieData = await fetchMovies("popular");
      setMovies(movieData.slice(0, 1));
    };
    loadMovies();
  }, []);

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : null;
      })
      .filter((name) => name)
      .join(", ");
  };
  return (
    <div>
      {movies.map((movie) => (
        <div>
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
            key={movie.id}
          >
            <div className="hero-overlay bg-opacity-70 "></div>
            <div className="hero-content text-neutral-content text-center ">
              <div className="max-w-3xl flex items-center justify-center text-left mx-auto ">
                <div className="flex items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    height={500}
                    width={200}
                    alt={movie.title}
                    className="mr-6 rounded-xl  "
                  />
                  <div>
                    <h1 className="text-5xl  mb-4 poppins-bold text-white">
                      {movie.title}
                    </h1>
                    <p className="text-xl mb-2">
                      {movie.release_date.substring(0, 4)}
                    </p>

                    <p className="text-sm text0w mb-4">
                      {getGenreNames(movie.genre_ids)}{" "}
                    </p>
                    <div className="flex items-center mb-4">
                      <span className="text-yellow-400 mr-2">&#9733;</span>
                      <span className="text-xl">
                        {movie.vote_average.toFixed(1)} / 10
                      </span>
                    </div>
                    <p className="mb-4">{movie.overview}</p>
                    <div className="flex gap-4">
                      {/* <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-primary">Learn More</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <HeroCard />
    </div>
  );
};

export default Hero;
