import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

export const instance = axios.create({
  baseURL,
  // headers: { "Access-Control-Allow-Origin": "https://api.themoviedb.org" },
});

export const imgBaseUrl = "https://image.tmdb.org/t/p/original";

/*
  headers: { "Access-Control-Allow-Origin": "https://api.themoviedb.org" }
  headers: { "Access-Control-Allow-Origin": "https://image.tmdb.org" }
  headers: { "Access-Control-Allow-Origin": "https://themoviedb.org" },
  headers: { "access-control-allow-origin": "https://api.themoviedb.org" },
  headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
  
  Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://api.themoviedb.org/3/discover/tv?api_key=fd2f7686d5976264edd5d30b2fbe0d75&language=en-US&with_networks=213. (Reason: header ‘access-control-allow-origin’ is not allowed according to header ‘Access-Control-Allow-Headers’ from CORS preflight response).
*/

/*
  headers: { "Access-Control-Allow-Origin": "*" },

  Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://api.themoviedb.org/3/discover/tv?api_key=fd2f7686d5976264edd5d30b2fbe0d75&language=en-US&with_networks=213. (Reason: CORS request did not succeed).
*/
