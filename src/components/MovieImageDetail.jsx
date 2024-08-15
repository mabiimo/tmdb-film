import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieImageDetail = () => {
  const { movieId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${baseurl}/${movieId}/images`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setImages(response.data.backdrops.slice(0, 5));
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
    <div className="flex mr-6 items-center justify-center text-center px-10 gap-5 mt-[-15px] ">
      {images.map((image) => (
        <div key={image.file_path} className="relative group ">
          <img
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
            alt={`Backdrop of movie ${movieId}`}
            className="w-[300px] rounded-lg transition-transform duration-300 group-hover:opacity-70"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieImageDetail;
