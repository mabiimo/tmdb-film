import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieVideosDetail = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/${movieId}/videos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setVideos(response.data.results.slice(0, 3));
        setLoading(false);
      } catch (error) {
        setError("There was an error fetching the movie videos.");
        setLoading(false);
      }
    };

    fetchVideos();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex mr-6 items-center justify-left text-center px-10 gap-5 mt-[15px]">
      {videos.map((video) => (
        <div key={video.id} className="relative group">
          
            <div className="relative">
            <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            className="w-[300px] rounded-lg transition-transform duration-300 group-hover:opacity-70"
            frameBorder="0"
            allowFullScreen
          />
              
            </div>
        </div>
      ))}
    </div>
  );
};

export default MovieVideosDetail;
