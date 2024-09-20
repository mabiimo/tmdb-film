import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieReview = () => {
  const { movieId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/${movieId}/reviews`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setImages(response.data.results.slice(0, 5));
        setLoading(false);
      } catch (error) {
        setError("There was an error fetching the movie images.");
        setLoading(false);
      }
    };

    fetchImages();
  }, [movieId]); // Add movieId as a dependency

  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10 gap-5 md:gap-10">
    {images.map((image) => (
      <div className="relative w-full md:w-1/3" key={image.file_path}>
        <div className="avatar placeholder absolute top-[20px] left-[-10px] z-10">
          <div className="bg-neutral text-neutral-content w-12 rounded-full overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500/${image.author_details.avatar_path}`}
              alt="Avatar"
              className="w-[300px] rounded-lg transition-transform duration-300 group-hover:opacity-70"
            />
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content mt-10 relative">
          <div className="card-body items-center text-center">
            <p className="text-sm md:text-base">{image.author}</p>
            <p className="text-xs md:text-sm">
              {image.content.length > 200
                ? `${image.content.slice(0, 100)}...`
                : image.content}
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
};
export default MovieReview;
