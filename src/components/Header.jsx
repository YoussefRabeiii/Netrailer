import React, { useState, useEffect } from "react";

import { VerticalNav } from "./";
import { FaPlay } from "react-icons/fa";
import { instance as axios, paths, imgBaseUrl } from "../api";

import "./header.css";
const Header = () => {
  const [randomCover, setRandomCover] = useState({});

  useEffect(() => {
    const {
      netflixTvPath,
      trendingTvPath,
      netflixMoviesPath,
      trendingMoviesPath,
      topRatedMoviesPath,
      natGeoTvPath,
    } = paths;

    const fetchData = async () => {
      const { data: netflixTv } = await axios.get(netflixTvPath);
      const { data: trendingTv } = await axios.get(trendingTvPath);
      const { data: natGeoTv } = await axios.get(natGeoTvPath);
      const { data: netflixMovies } = await axios.get(netflixMoviesPath);
      const { data: trendingMovies } = await axios.get(trendingMoviesPath);
      const { data: topRatedMovies } = await axios.get(topRatedMoviesPath);

      const response = [
        ...netflixTv.results,
        ...trendingTv.results,
        ...natGeoTv.results,
        ...netflixMovies.results,
        ...trendingMovies.results,
        ...topRatedMovies.results,
      ];

      const random = await response[
        Math.floor(Math.random() * response.length - 1)
      ];

      // const randomDetails = await axios.get(); /* TODO: Get the Network Logo */

      setRandomCover(random);
    };

    fetchData();
  }, []);

  const initialCover = {
    type: "series",
    name: "Stranger Things",
    homepageLink: "https://www.netflix.com/title/80057281",
    cover: "../images/Stranger Things.jpg",
    networkLogo: "../images/Netflix.png",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",

    // cover: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    // networkLogo: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
  };

  const {
    name,
    title,
    overview,
    media_type,
    poster_path,
    backdrop_path,
    original_name,
    original_title,

    networkLogo /* BUG: Not Sure if this even exist */,
    original_homepage /* BUG: Not Sure if this even exist */,
  } = randomCover;
  return (
    <header
      style={{
        backgroundImage: `url(${
          (backdrop_path && `${imgBaseUrl}${backdrop_path || poster_path}`) ||
          initialCover.cover
        })`,
      }}
    >
      <div className="header__nav">
        <VerticalNav />
      </div>

      <div className="header__content">
        <div className="header__top">
          <h1>Hello, Youssef</h1>

          <a href={original_homepage || initialCover.homepageLink}>
            <FaPlay className="fa header__icons" />
            <h2>Continue Watching</h2>
            <h3>
              {title ||
                original_title ||
                name ||
                original_name ||
                initialCover.name}
            </h3>
          </a>
        </div>
        <div className="header__center">
          <div className="header__type">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              alt="logo"
            />
            <h2>{media_type || initialCover.type}</h2>
          </div>

          <h1 className="header__title">
            {title ||
              original_title ||
              name ||
              original_name ||
              initialCover.name}
          </h1>

          <h3 className="header__description">
            {overview || initialCover.overview}
          </h3>

          <div className="header__watchLinks">
            <a href={original_homepage || initialCover.homepageLink}>
              <h2>
                <FaPlay className="fa header__icons" />
                Play
              </h2>
            </a>
            <a href={original_homepage || initialCover.homepageLink}>
              <h2>More info</h2>
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <img src={networkLogo || initialCover.networkLogo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
