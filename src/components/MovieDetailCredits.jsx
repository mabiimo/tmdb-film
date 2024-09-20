import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetailCredits = () => {
  const { movieId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/${movieId}/credits`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setImages(response.data.cast.slice(0,5));
        setLoading(false);
      } catch (error) {
        setError("There was an error fetching the movie images.");
        setLoading(false);
      }
    };

    fetchImages();
  }, [movieId]); 

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-center items-center text-center px-4 gap-5 mt-4">
  {images.map((image) => (
    <div key={image.file_path} className="relative group">
      <img
        src={`https://image.tmdb.org/t/p/w500${image.profile_path}`}
        alt={`Backdrop of movie ${movieId}`}
        className="w-full max-w-[100px] w-[300px] rounded-lg transition-transform duration-300 group-hover:opacity-70"
      />
      <p className="mt-2 text-white">{image.name}</p>
    </div>
  ))}
</div>

  );
};

export default MovieDetailCredits;
