import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MediaHeader } from "../components";
import { instance as axios, API_KEY } from "../api";

import "../css/singleMovie.css";
const SingleMovie = () => {
  const [movieMain, setMovieMain] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

  const { movieURL } = useParams();
  const movieURLArr = movieURL.split("-");
  const movieID = movieURLArr[movieURLArr.length - 1];

  const fetchData = async (movieID) => {
    const { data: mainData } = await axios.get(
      `/movie/${movieID}?api_key=${API_KEY}&language=en-US`
    );

    const { data: creditsData } = await axios.get(
      `/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
    );

    setMovieMain(mainData);
    setMovieCredits(creditsData?.cast);
  };

  useEffect(() => {
    fetchData(movieID);
  }, [movieID]);

  // console.log(movieCredits);
  // console.table(movieCredits);
  // console.log(movieMain);
  // console.table(movieMain);

  return (
    <div className="singleMovie">
      <MediaHeader
        credits={movieCredits}
        date={movieMain?.release_date} // TODO: USE IT
        rate={movieMain?.vote_average}
        overview={movieMain?.overview}
        backdrop={movieMain?.backdrop_path}
        title={movieMain?.title || movieMain?.original_title}
      />

      <main>
        <h1>Single Movie</h1>
      </main>
    </div>
  );
};

export default SingleMovie;
