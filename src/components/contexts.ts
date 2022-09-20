import React from "react";

export const CurrentMovieContext = React.createContext({
  movieBanner: '',
  moviePoster: '',
  movieTitle: '',
  plot: '',
  genres: [],
  rating: 0,
  director: ''
});
