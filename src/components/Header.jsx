import React, { useState, useEffect } from "react";

// import { VerticalNav } from "./";
// import Youtube from "react-youtube";
import { FaPlay } from "react-icons/fa";
// import { strangerThingsCover } from "../images";
import { instance as axios, paths, imgBaseUrl, API_KEY } from "../api";

import "./header.css";
const Header = () => {
  const [randomCover, setRandomCover] = useState({});
  const [clickedID, setClickedID] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const {
      // netflixTvPath,
      trendingTvPath,
      // netflixMoviesPath,
      trendingMoviesPath,
      topRatedMoviesPath,
      natGeoTvPath,
    } = paths;

    const fetchData = async () => {
      // const { data: netflixTv } = await axios.get(netflixTvPath);
      const { data: trendingTv } = await axios.get(trendingTvPath);
      const { data: natGeoTv } = await axios.get(natGeoTvPath);
      // const { data: netflixMovies } = await axios.get(netflixMoviesPath);
      const { data: trendingMovies } = await axios.get(trendingMoviesPath);
      const { data: topRatedMovies } = await axios.get(topRatedMoviesPath);

      const response = [
        // ...netflixTv.results,
        ...trendingTv.results,
        ...natGeoTv.results,
        // ...netflixMovies.results,
        ...trendingMovies.results,
        ...topRatedMovies.results,
      ];

      const random = await response[
        Math.floor(Math.random() * response.length - 1)
      ];

      setRandomCover(random);
    };

    fetchData();
  }, []);

  const initialCover = {
    type: "series",
    name: "Stranger Things",
    homepageLink: "https://www.netflix.com/title/80057281",
    // cover: strangerThingsCover,
    networkLogo: "../images/Netflix.png",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",

    cover:
      "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    // networkLogo: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
  };

  const {
    id,
    name,
    title,
    overview,
    media_type,
    // poster_path,
    backdrop_path,
    original_name,
    original_title,
  } = randomCover;

  const finalTitle = title || original_title || name || original_name;

  const onHeader = async (isSeries = false, id) => {
    if (clickedID === id) {
      setClickedID(null);
      setTrailerKey(null);
    } else {
      setClickedID(id);

      const { data } = await axios.get(
        `/${isSeries ? "tv" : "movie"}/${id}/videos?api_key=${API_KEY}`
      );
      // const youtubeTrailer = mediaVideos.results.find(
      //   (media) => media.type === "Trailer"
      // );

      console.log(data);
      // setTrailerKey(youtubeTrailer.key);
    }
  };

  console.log(trailerKey);
  // console.log(randomCover);

  return (
    <header
      style={{
        backgroundImage: `url(${imgBaseUrl}${backdrop_path})`,
      }}
    >
      {/* <div className="header__nav">
        <VerticalNav />
      </div> */}

      <div className="header__content">
        <div className="header__top">
          <div
            // onClick={onHeader(randomCover.isSeries, randomCover.id)}
            className="header__continue"
          >
            <FaPlay className="fa header__icons" />
            <h2>Continue Watching</h2>
            <h3>{finalTitle || initialCover.name}</h3>
          </div>
        </div>
        <div className="header__center">
          <div className="header__type">
            <h2>{media_type || initialCover.type}</h2>
          </div>

          <h1 className="header__title">
            {finalTitle ? finalTitle.slice(0, 50) : initialCover.name}
          </h1>

          <h3 className="header__description">
            {overview ? overview.slice(0, 300) + "..." : initialCover.overview}
          </h3>

          <div className="header__watchLinks">
            <div
              className="header__watchLink header__watchLink-1"
              // onClick={console.log(`The random Cover ID: ${id}`)}
              // onClick={console.log(`The random Cover Type: ${media_type}`)}
              // onClick={setClickedID(id)}
              onClick={(e) => onHeader(media_type, id)}
            >
              <h2>
                <FaPlay className="fa header__icons" />
                Play
              </h2>
            </div>
            <div className="header__watchLink header__watchLink-2">
              <h2>More info</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
