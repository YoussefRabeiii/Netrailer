import React from "react";

import { Requests } from "./api";
import { Nav, Hero, Row } from "./components";

import "./app.css";
const App = () => {
  const {
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
    fetchNetflixOriginals,
  } = Requests;

  return (
    <div className="app">
      <Nav />
      <Hero />

      {/* <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={fetchNetflixOriginals}
      /> */}
      {/* <Row title="Trending Now" fetchUrl={fetchTrending} /> */}
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      {/* <Row title="Action Movies" fetchUrl={fetchActionMovies} /> */}
      {/* <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} /> */}
      {/* <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} /> */}
      {/* <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} /> */}
      {/* <Row title="Documentaries" fetchUrl={fetchDocumentaries} /> */}
    </div>
  );
};

export default App;
