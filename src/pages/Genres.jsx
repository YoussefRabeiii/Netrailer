import React from "react";

import { SingleGenre } from "./";

import "../css/genres.css";
const Genres = () => {
  return (
    <div className="genres">
      <SingleGenre genre="netflix" />
      <SingleGenre genre="romance" />
      <SingleGenre genre="action" />
    </div>
  );
};

export default Genres;
