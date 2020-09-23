import React from "react";

import { imgBaseUrl } from "../api";

import "./card.css";
const Card = ({ isSeries, title, poster, backdrop, isLargePoster }) => {
  return (
    <div className="card">
      <img
        alt={`${title} Poster`}
        src={`${imgBaseUrl}${isLargePoster ? poster : backdrop}`}
        className={`${isLargePoster ? "card__poster" : "card__backdrop"}`}
      />

      <div className={`card__type ${isSeries ? "card__tv" : null}`}>
        <h1>TV</h1>
      </div>
    </div>
  );
};

export default Card;
