import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { instance as axios, Requests, imgBaseUrl } from "../api";

import "../css/hero.css";
const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      const allMovies = request.data.results;
      const randomMovie =
        allMovies[Math.floor(Math.random() * allMovies.length - 1)];

      setMovie(randomMovie);
      return randomMovie;
    };

    fetchData();
  }, []);

  return (
    <header
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imgBaseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="hero__content">
        <h1>{movie?.title || movie?.name || movie?.original_name || ""}</h1>

        <div className="hero__links">
          {/* <Link to="" className="hero__link"> */}
          <h2>Play</h2>
          {/* </Link> */}
          {/* <Link to="" className="hero__link"> */}
          <h2>My List</h2>
          {/* </Link> */}
        </div>

        <p>{movie?.overview}</p>
      </div>
    </header>
  );
};

export default Hero;
