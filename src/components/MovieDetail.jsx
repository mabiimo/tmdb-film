import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;
  useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `${baseurl}/${movieId}`,
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the movie!", error);
      });
  }, []);

  // Check if movie data is loaded
  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <div
          className="hero "
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
                  <h1 className="text-5xl poppins-bold text-white">
                    {movie.title}
                  </h1>
                  <p className="">{movie.tagline}</p>
                  <p className="text-xl mb-2">
                    {movie.release_date.substring(0, 4)}
                  </p>

                  {/* <p className="text-sm text0w mb-4">
                      {getGenreNames(movie.genre_ids)}{" "}
                    </p> */}
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 mr-2">&#9733;</span>
                    <span className="text-xl">
                      {movie.vote_average.toFixed(1)} / 10
                    </span>
                  </div>
                  <p className="mb-4">{movie.runtime} Minutes</p>
                  <p className="mb-4">{movie.status}</p>
                  <p className="mb-4">{movie.overview}</p>
                  <div className="flex gap-4"></div>
                </div>
                {/* <button className="btn btn-primary z-0">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
