import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchMovie = ({ setSearchActive, setSearchResults }) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY4YzNjNDI0Njc5NDJlYzgwM2FlOTJhNTZmOWEwYyIsIm5iZiI6MTcyMzQ1NDUwNy45Mzg0LCJzdWIiOiI2NDBlYWFlZWUxOGUzZjA3YWM1MjE4YzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AR6YcxK3kxjuDjmPIMPdOeiERvOGsYj-loXsUSlWfYk";

  const [search, setSearch] = useState(''); // State for search query
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    if (search) {
      setSearchActive(true); // Set search active when there is a search query

      const fetchImages = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${search}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setSearchResults(response.data.results); // Pass results to parent
          setLoading(false);
        } catch (error) {
          setError("There was an error fetching the movie images.");
          setLoading(false);
        }
      };

      fetchImages();
    } else {
      setSearchActive(false); // Set search inactive when search is cleared
      setSearchResults([]); // Clear search results
    }
  }, [search, setSearchActive, setSearchResults]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={({ target }) => setSearch(target.value)}
        value={search}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchMovie;
