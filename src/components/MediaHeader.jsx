import React from "react";

import { imgBaseUrl } from "../api";

import "./mediaHeader.css";
const MediaHeader = ({
  backdrop,
  title,
  rate,
  overview,
  date,
  credits = [],
}) => {
  // console.log(credits);

  return (
    <header
      className="mediaHeader"
      style={{ backgroundImage: `url(${imgBaseUrl}original${backdrop})` }}
    >
      <section className="mediaHeader__info">
        <span className="mediaHeader__info__rate">
          <span role="img" aria-label="star">
            ⭐
          </span>
          <h3>{rate}</h3>
        </span>

        <h1 className="mediaHeader__info__title">{title}</h1>

        <p className="mediaHeader__info__overView">{overview}</p>

        <div className="mediaHeader__info__vids"></div>

        <div className="mediaHeader__info__btns"></div>
      </section>

      <section className="mediaHeader__cast">
        <h1 className="mediaHeader__cast__title">Cast</h1>

        <span className="mediaHeader__cast__imgs"></span>

        {/* <h2 className="mediaHeader__cast__name"></h2> */}

        <p className="mediaHeader__cast__bio"></p>

        <span className="mediaHeader__cast__socials"></span>
      </section>
    </header>
  );
};

export default MediaHeader;
