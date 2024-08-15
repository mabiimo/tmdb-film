import React, { useState } from "react";
import {
  Baselayout,
  Hero,
  Category,
  MovieNowPlaying,
  MoviePopular,
  MovieTopRated,
  MovieUpComing,
  PosterCard,
} from "../components/ExportComponents";
import SearchComponents from "../components/SearchComponents";
import { Link } from "react-router-dom";

const Homepages = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="bg-[#1e1e1e] justify-center items-center align-center text-center">
      <Hero />
      <Category />
      <SearchComponents
        setSearchActive={setSearchActive}
        setSearchResults={setSearchResults}
      />
      {searchActive ? (
        <div className="flex flex-wrap justify-center p-10">
          <div className="grid grid-cols-6 gap-10">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <PosterCard key={index} movie={result}/>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      ) : (
        <>
          <MovieNowPlaying />
          <MoviePopular />
          <MovieTopRated />
          <MovieUpComing />
        </>
      )}
    </div>
  );
};

export default Homepages;
