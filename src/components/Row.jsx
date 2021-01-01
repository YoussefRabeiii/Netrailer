import React, { useState, useEffect } from "react";

import Youtube from "react-youtube";
import { instance as axios, imgBaseUrl, API_KEY } from "../api";

import "./row.css";
import "./card.css";
const Row = ({ title, isLargePoster, fetchUrls: [fetchTv, fetchMovie] }) => {
  const [media, setMedia] = useState([]);
  const [clickedID, setClickedID] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [clickedTitle, setClickedTitle] = useState(null);

  const onPoster = async (isSeries = false, title, id) => {
    if (clickedID === id) {
      setClickedID(null);
      setTrailerKey(null);
      setClickedTitle(null);
    } else {
      const { data: mediaVideos } = await axios.get(
        `/${isSeries ? "tv" : "movie"}/${id}/videos?api_key=${API_KEY}`
      );
      const youtubeTrailer = mediaVideos.results.find(
        (media) => media.type === "Trailer"
      );

      setClickedID(id);
      setClickedTitle(title);
      setTrailerKey(youtubeTrailer.key);
    }
  };

  const onPosterClose = () => {
    setClickedID(null);
    setTrailerKey(null);
    setClickedTitle(null);
  };

  const fetchData = async (fetchTv, fetchMovie) => {
    const { data: fetchedTv } = await axios.get(fetchTv);
    fetchedTv.results.map((series) => (series.isSeries = true));
    const { data: fetchedMovies } = fetchMovie
      ? await axios.get(fetchMovie)
      : { data: undefined };

    const combinedMedia = fetchedMovies
      ? [...fetchedTv.results, ...fetchedMovies.results]
      : fetchedTv.results;
    const sortedMedia = combinedMedia.sort(
      (a, b) => b.popularity - a.popularity
    );

    setMedia(sortedMedia);
  };

  useEffect(() => {
    fetchData(fetchTv, fetchMovie);
  }, [fetchTv, fetchMovie]);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>

      <div className="row__cards">
        {media.map((media) => {
          const {
            id,
            name,
            title,
            isSeries,
            poster_path,
            backdrop_path,
            original_name,
            original_title,
          } = media;

          const finalTitle = name || original_name || title || original_title;

          return (
            <div
              key={id}
              className="card"
              onClick={(e) => onPoster(isSeries, finalTitle, id)}
            >
              <img
                src={`${imgBaseUrl}${
                  isLargePoster ? poster_path : backdrop_path
                }`}
                alt={`${finalTitle} Poster`}
                className={`${
                  isLargePoster ? "card__poster" : "card__backdrop"
                }`}
              />

              <div className={`card__type ${isSeries ? "card__tv" : null}`}>
                <h1>TV</h1>
              </div>
            </div>
          );
        })}
      </div>

      {trailerKey && (
        <div className="row__trailer">
          <div className="row__trailer__header">
            <h1 className="row__trailer__title">{clickedTitle || null}</h1>
            <h1 className="row__trailer__close" onClick={onPosterClose}>
              X
            </h1>
          </div>

          <Youtube
            videoId={trailerKey}
            className="row__trailer__video"
            opts={{ playerVars: { autoplay: 1 } }}
          />
        </div>
      )}
    </div>
  );
};

export default Row;
