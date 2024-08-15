import React from "react";
import {
  Baselayout,
  MovieDetail,
  MovieDetailCredits,
  MovieImageDetail,
  MovieReview,
  MovieVideosDetail,
} from "../components/ExportComponents";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#1e1e1e] justify-center items-center align-center text-center">
      <button onClick={goBack}>Back</button>
      <div>
        <MovieDetail />
      </div>
      <div>
        <MovieImageDetail />
      </div>
      <div>
        <MovieVideosDetail/>
        </div>
      <div>
        <MovieDetailCredits/>
      </div>
      <div>
        <MovieReview/>
      </div>
      {/* <div>similar</div> */}
      {/* <div>recomendations tidak mirip dengan movie</div> */}
    </div>
  );
};

export default DetailPage;
