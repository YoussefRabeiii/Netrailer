import React, { useState, useEffect } from "react";

import Youtube from "react-youtube";
import { instance as axios, imgBaseUrl, API_KEY } from "../api";

import "./row.css";
import "./card.css";
const Row = ({ title, isPoster = false, fetchUrls: [fetchTv, fetchMovie] }) => {
  const [media, setMedia] = useState([]);
  const [clickedID, setClickedID] = useState("");
  const [trailerKey, setTrailerKey] = useState("");
  const [clickedTitle, setClickedTitle] = useState("");

  const onPoster = async (isSeries = false, title, id) => {
    // So Why did I made this stupid logic and not like the one in the Header comp.
    // If i just say if(TrailerKey) exist then close we wouldn't be able to change between posters whithout closing them first, So yeah this was the best thing I could thinck of when I'm half asleep

    if (clickedID === id) {
      setClickedID("");
      setTrailerKey("");
      setClickedTitle("");
    } else {
      const { data: mediaVideos } = await axios.get(
        `/${isSeries ? "tv" : "movie"}/${id}/videos?api_key=${API_KEY}`
      );
      const youtubeTrailer = mediaVideos.results.find(
        (media) => media.type === "Trailer"
      );

      setClickedID(id);
      setClickedTitle(title);
      setTrailerKey(youtubeTrailer ? youtubeTrailer.key : "");
    }
  };

  const onPosterClose = () => {
    setClickedID("");
    setTrailerKey("");
    setClickedTitle("");
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

  console.log(media);

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
                src={`${imgBaseUrl}${isPoster ? "w342" : "w780"}${
                  isPoster ? poster_path : backdrop_path
                }`}
                alt={`${finalTitle} Poster`}
                className={`${isPoster ? "card__poster" : "card__backdrop"}`}
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
            <h1
              className="row__trailer__close"
              onClick={(e) => onPosterClose()}
            >
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
