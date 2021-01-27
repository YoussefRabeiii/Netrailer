import React from "react";

import { paths } from "../api";
import { Header, Row } from "../components";

import "../css/home.css";
const Home = () => {
  const {
    netflixTvPath,
    netflixMoviesPath,
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
    // sciFi /* BUG: Need to have a real path */,
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
        <Row
          title="Trending"
          fetchUrls={[trendingTvPath, trendingMoviesPath]}
        />
        <Row title="Action" fetchUrls={[actionTvPath, actionMoviesPath]} />
        <Row title="Comedy" fetchUrls={[comedyTvPath, comedyMoviesPath]} />
        <Row title="Horror" fetchUrls={[horrorTvPath, horrorMoviesPath]} />
        <Row title="Romance" fetchUrls={[romanceTvPath, romanceMoviesPath]} />
      </main>
    </div>
  );
};

export default Home;
