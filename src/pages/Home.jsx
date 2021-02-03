import React from "react";

import { paths } from "../api";
import { Header, Row } from "../components";

import "../css/home.css";
const Home = () => {
  const {
    netflixTvPath,
    netflixMoviesPath,
    cwTvPath,
    trendingMoviesPath,
    trendingTvPath,
    actionMoviesPath,
    actionTvPath,
    comedyTvPath,
    comedyMoviesPath,
    horrorTvPath,
    horrorMoviesPath,
    romanceTvPath,
    romanceMoviesPath,
    sciFiTvPath,
    sciFiMoviesPath,
  } = paths;

  return (
    <div className="home">
      <Header />

      <main>
        {/* <Persons /> */}

        <Row
          isPoster
          title="Netflix Originals"
          fetchUrls={[netflixTvPath, netflixMoviesPath]}
        />
        <Row isPoster title="The CW Originals" fetchUrls={[cwTvPath]} />
        <Row
          title="Trending"
          fetchUrls={[trendingTvPath, trendingMoviesPath]}
        />
        <Row title="Action" fetchUrls={[actionTvPath, actionMoviesPath]} />
        <Row title="Sci-Fi" fetchUrls={[sciFiTvPath, sciFiMoviesPath]} />
        <Row title="Comedy" fetchUrls={[comedyTvPath, comedyMoviesPath]} />
        <Row title="Horror" fetchUrls={[horrorTvPath, horrorMoviesPath]} />
        <Row title="Romance" fetchUrls={[romanceTvPath, romanceMoviesPath]} />
      </main>
    </div>
  );
};

export default Home;
