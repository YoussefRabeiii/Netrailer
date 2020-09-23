export const API_KEY = "fd2f7686d5976264edd5d30b2fbe0d75"; // TMDB API Key;

export const paths = {
  // By Genres Series
  trendingTvPath: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  topRatedTvPath: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  actionTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=28`,
  comedyTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  horrorTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=27`,
  romanceTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  documentariesTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,

  // By Genres Movies
  trendingMoviesPath: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  topRatedMoviesPath: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  comedyMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  horrorMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  romanceMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  documentariesMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,

  // By Networks Series
  netflixTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  natGeoTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=43`,
  bbcEarthTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=3859`,
  animalPlanetTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=91`,
  discoveryTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=64`,
  nickelodeonTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=13`,
  cartoonNetTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=56`,
  disneyTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=54`,
  boomerangTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=523`,
  bbcKidsTvPath: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=414`,

  // By Networks Movies
  netflixMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`,
  natGeoMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=43`,
  bbcEarthMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=3859`,
  animalPlanetMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=91`,
  discoveryMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=64`,
  nickelodeonMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=13`,
  cartoonNetMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=56`,
  disneyMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=54`,
  boomerangMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=523`,
  bbcKidsMoviesPath: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=414`,

  // Details
  MovieDetailsPath: ``,
  seriesDetailsPath: ``,
  personDetailsPath: ``,

  // Other
  genresPath: ``,
  celebritiesPath: ``,
};
