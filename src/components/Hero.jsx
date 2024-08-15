import React, { useState, useEffect } from "react";
import HeroCard from "./HeroCard";
import fetchMovies from "../helper/fetchMovies";
import FetchGenre from "../helper/FetchGenre";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // State untuk film yang dipilih

  useEffect(() => {
    const loadGenre = async () => {
      const fetchGenre = await FetchGenre("list");
      setGenres(fetchGenre);
    };
    loadGenre();

    const loadMovies = async () => {
      const movieData = await fetchMovies("popular");
      setMovies(movieData.slice(0, 5)); // Ambil 5 film untuk ditampilkan
      if (movieData.length > 0) {
        setSelectedMovie(movieData[0]); // Set film pertama sebagai default jika tidak ada film yang dipilih
      }
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

  const handleCardClick = (movie) => {
    setSelectedMovie(movie); // Set film yang dipilih
  };

  // Gunakan film yang dipilih atau film pertama dari array movies
  const movieToDisplay =
    selectedMovie || (movies.length > 0 ? movies[0] : null);

  return (
    <div>
      {movieToDisplay && (
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieToDisplay.backdrop_path})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70 "></div>
          <div className="hero-content text-neutral-content text-center ">
            <div className="max-w-3xl flex items-center justify-center text-left mx-auto ">
              <div className="flex items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieToDisplay.poster_path}`}
                  height={500}
                  width={200}
                  alt={movieToDisplay.title}
                  className="mr-6 rounded-xl  "
                />
                <div>
                  <h1 className="text-5xl  mb-4 poppins-bold text-white">
                    {movieToDisplay.title}
                  </h1>
                  <p className="text-xl mb-2">
                    {movieToDisplay.release_date.substring(0, 4)}
                  </p>
                  <p className="text-sm text0w mb-4">
                    {getGenreNames(movieToDisplay.genre_ids)}{" "}
                  </p>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 mr-2">&#9733;</span>
                    <span className="text-xl">
                      {movieToDisplay.vote_average.toFixed(1)} / 10
                    </span>
                  </div>
                  <p className="mb-4">{movieToDisplay.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <HeroCard onCardClick={handleCardClick} />{" "}
      {/* Pass handleCardClick as a prop */}
    </div>
  );
};

export default Hero;
