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
    natGeoTvPath,
    actionMoviesPath,
    actionTvPath,
    comedyTvPath,
    comedyMoviesPath,
    horrorTvPath,
    horrorMoviesPath,
    romanceTvPath,
    romanceMoviesPath,
    documentariesTvPath,
    documentariesMoviesPath,
    // sciFi /* BUG: Need to have a real path */,
  } = paths;

  return (
    <div className="home">
      <Header />

      <main>
        {/* <Persons /> */}

        <Row
          isLargePoster={true}
          title="Netflix Originals"
          fetchUrls={[netflixTvPath, netflixMoviesPath]}
        />
        <Row
          title="Trending"
          isLargePoster={false}
          fetchUrls={[trendingTvPath, trendingMoviesPath]}
        />
        <Row
          isLargePoster={false}
          title="National Geographic"
          fetchUrls={[natGeoTvPath]}
        />
        <Row
          title="Action"
          isLargePoster={false}
          fetchUrls={[actionTvPath, actionMoviesPath]}
        />

        <Row
          title="comedy"
          isLargePoster={false}
          fetchUrls={[comedyTvPath, comedyMoviesPath]}
        />
        <Row
          title="Horror"
          isLargePoster={false}
          fetchUrls={[horrorTvPath, horrorMoviesPath]}
        />
        <Row
          title="Romance"
          isLargePoster={false}
          fetchUrls={[romanceTvPath, romanceMoviesPath]}
        />
        <Row
          title="Documentry"
          isLargePoster={false}
          fetchUrls={[documentariesTvPath, documentariesMoviesPath]}
        />
      </main>
    </div>
  );
};

export default Home;
