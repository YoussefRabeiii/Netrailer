import React, { useState, useEffect } from "react";

// import { Type } from "./";
import { instance as axios } from "../src/api";
// import YoutubeVideo from "YoutubeVideo";
// import MovieTrailer from "MovieTrailer";

import "./row.css";
const Row = ({ title, isLargePoster, fetchUrl: { fetchTv, fetchMovie } }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchData = async (fetchTv, fetchMovie) => {
      const { data: fetchedTv } = await axios.get(fetchTv);
      const { data: fetchedMovie } = await axios.get(fetchMovie);

      const combinedMedia = [...fetchedTv.results, ...fetchedMovie.results];

      setMedia(combinedMedia);
      return combinedMedia;
    };

    fetchData(fetchTv, fetchMovie);
  }, [fetchTv, fetchMovie]);

  return (
    <div className="row">
      <div className="cards">
        {media.map((media) => {
          const {
            name,
            // type,
            title,
            poster,
            original_name,
            original_title,
          } = media;

          return (
            <div className="card">
              <div className="poster">
                <img
                  src={poster}
                  alt={name || original_name || title || original_title}
                />

                {/* <Type type={type} /> */}
              </div>

              <div className="title">
                <h1>{name || original_name || title || original_title}</h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="trailer">
        {/* {(original_trailer && <YoutubeVideo src={original_trailer} />) || (
          <MovieTrailer
            src={name || original_name || title || original_title}
          />
        )} */}
      </div>
    </div>
  );
};

export default Row;
