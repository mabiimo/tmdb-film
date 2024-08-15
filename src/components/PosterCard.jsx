import React from "react";
import { Link } from "react-router-dom";

const PosterCard = ({ movie }) => {
  const { id, poster_path, title, release_date, vote_average } = movie;

  return (
    <Link to={`/detail/${id}`} key={id}>
      <div className="hover:scale-125 transition-transform duration-300">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="h-60 rounded-md"
        />
        <p className="text-left poppins-bold text-white mt-4">
          {title.slice(0, 15) + "..."}
        </p>
        <div className="flex gap-20 items-center text-center">
          <p className="text-sm">{new Date(release_date).getFullYear()}</p>
          <div className="flex">
            <span className="text-yellow-400 mr-2">&#9733;</span>
            <p className="text-yellow-400">{vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PosterCard;
