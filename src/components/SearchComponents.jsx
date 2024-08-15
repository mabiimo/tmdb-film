import React from "react";
import SearchMovie from "./SearchMovie";

const SearchComponents = ({ setSearchActive, setSearchResults }) => {
  return (
    <div className="bg-[#2e2e2e] p-10 flex flex-row space-x-40 justify-center">
      <div className="text-left text-white poppins-bold">
        <p className="poppins-light mb-3">Search Movie</p>
        <SearchMovie setSearchActive={setSearchActive} setSearchResults={setSearchResults} />
      </div>
      <div className="text-left text-white poppins-bold">
        <p className="poppins-light mb-3">Year</p>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option selected value={"test"}>Han Solo</option>
          <option value={"test1"}>Greedo</option>
        </select>
      </div>
      <div className="text-left text-white poppins-bold">
        <p className="poppins-light mb-3">Year</p>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option selected value={"test"}>Han Solo</option>
          <option value={"test1"}>Greedo</option>
        </select>
      </div>
      <div className="text-left text-white poppins-bold">
        <p className="poppins-light mb-3">Year</p>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option selected value={"test"}>Han Solo</option>
          <option value={"test1"}>Greedo</option>
        </select>
      </div>
    </div>
  );
};

export default SearchComponents;
