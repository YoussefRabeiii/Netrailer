import React, { useState } from "react";

import { instance as axios, API_KEY, imgBaseUrl } from "../api";

import "./mediaHeader.css";
const MediaHeader = ({ backdrop, title, rate, overview, date, credits }) => {
  const [castInfo, setCastInfo] = useState({});

  const OnCastImg = async (castID) => {
    const { data: castData } = await axios.get(
      `/person/${castID}?api_key=${API_KEY}`
    );

    const { id, name, biography: bio } = castData;

    setCastInfo({
      id,
      name,
      bio: `${bio?.slice(0, 400)} ...`,
    });
  };

  // TODO: useEffect to make the default cast info the first actor/actress without clicking

  // console.log(castInfo);

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

        <div className="mediaHeader__info__imgs"></div>

        <div className="mediaHeader__info__btns"></div>
      </section>

      <section className="mediaHeader__cast">
        <h1 className="mediaHeader__cast__title">Cast</h1>

        <span className="mediaHeader__cast__imgs">
          {credits?.map((person) => {
            return (
              <img
                // TODO: Do it in the CSS
                src={`${imgBaseUrl}w342${person.profile_path}`}
                alt={person.name || person.original_name}
                onClick={() => {
                  OnCastImg(person?.id);
                }}
              />
            );
          })}
        </span>

        <h2 className="mediaHeader__cast__name">{castInfo?.name}</h2>

        <p className="mediaHeader__cast__bio">{castInfo?.bio}</p>

        <span className="mediaHeader__cast__socials"></span>
      </section>
    </header>
  );
};

export default MediaHeader;
