import React, { useState, useEffect } from "react";

import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import { instance as axios, imgBaseUrl } from "../api";

import "../css/row.css";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request.data.results;
    };

    fetchData();
  }, [fetchUrl]);

  const youtubeConfig = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onMovieClick = (movie) => {
    trailer
      ? setTrailer("")
      : movieTrailer(movie?.name || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);

            setInterval(urlParams.get("v"));
          })
          .catch((err) => console.error(err));
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          const { id, poster_path, backdrop_path, name } = movie;

          return (
            <img
              key={id}
              alt={name}
              onClick={onMovieClick}
              className={`row__poster ${isLargeRow && "row__poster--large"}`}
              src={`${imgBaseUrl}${isLargeRow ? poster_path : backdrop_path}`}
            />
          );
        })}
      </div>

      {trailer && (
        <Youtube videoId={trailer} opts={youtubeConfig} className="trailer" />
      )}
    </div>
  );
};

export default Row;
