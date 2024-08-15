import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [genres, setGenres] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY4YzNjNDI0Njc5NDJlYzgwM2FlOTJhNTZmOWEwYyIsIm5iZiI6MTcyMzQ1NDUwNy45Mzg0LCJzdWIiOiI2NDBlYWFlZWUxOGUzZjA3YWM1MjE4YzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AR6YcxK3kxjuDjmPIMPdOeiERvOGsYj-loXsUSlWfYk";

  useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: `https://api.themoviedb.org/3/genre/movie/list`,
      })
      .then((response) => {
        setGenres(response.data.genres.slice(0, 14));
      })
      .catch((error) => {
        console.error("There was an error fetching the genres!", error);
      });
  }, [token]);

  return (
    <div className="flex flex-wrap text-sm min-w-full text-center align-center items-center justify-center text-white ">
      {genres.map((genre) => (
        <div key={genre.id} className="p-4">
          <p>{genre.name}</p>
        </div>
      ))}
    </div>
    
  );
};

export default Category;
