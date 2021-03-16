import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { instance as axios, API_KEY } from "../api";

import "../css/singleMovie.css";
const SingleMovie = () => {
  const [movieData, setMovie] = useState({});

  const { movieURL } = useParams();
  const movieURLArr = movieURL.split("-");
  const movieID = movieURLArr[movieURLArr.length - 1];

  const fetchData = async (movieID) => {
    const { data } = await axios.get(
      `/movie/${movieID}?api_key=${API_KEY}&language=en-US`
    );

    setMovie(data);
  };

  useEffect(() => {
    fetchData(movieID);
  }, [movieID]);

  console.log(movieData);
  // console.table(movieData);

  return (
    <main>
      <header>
        <h1>Single Movie</h1>
      </header>
    </main>
  );
};

export default SingleMovie;
