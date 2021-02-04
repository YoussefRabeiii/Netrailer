import React from "react";

import uuid from "uuid";
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

  const homeRows = [
    {
      title: "Netflix Originals",
      isPoster: true,
      fetchUrls: [netflixTvPath, netflixMoviesPath],
    },
    {
      title: "The CW Originals",
      isPoster: true,
      fetchUrls: [cwTvPath],
    },
    {
      title: "Trending",
      fetchUrls: [trendingTvPath, trendingMoviesPath],
    },
    {
      title: "Action",
      fetchUrls: [actionTvPath, actionMoviesPath],
    },
    {
      title: "Sci-Fi",
      fetchUrls: [sciFiTvPath, sciFiMoviesPath],
    },
    {
      title: "Comedy",
      fetchUrls: [comedyTvPath, comedyMoviesPath],
    },
    {
      title: "Horror",
      fetchUrls: [horrorTvPath, horrorMoviesPath],
    },
    {
      title: "Romance",
      fetchUrls: [romanceTvPath, romanceMoviesPath],
    },
  ];

  return (
    <div className="home">
      <Header />

      <main>
        {/* <Persons /> */}

        {homeRows.map(({ title, isPoster = false, fetchUrls }, key) => (
          <Row
            key={key}
            title={title}
            rowID={uuid.v4()}
            isPoster={isPoster}
            fetchUrls={fetchUrls}
          />
        ))}

        {/* <Row
          isPoster
          // rowID={uuid.v4()}
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
        <Row title="Romance" fetchUrls={[romanceTvPath, romanceMoviesPath]} /> */}
      </main>
    </div>
  );
};

export default Home;
