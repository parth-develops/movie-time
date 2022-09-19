import React from "react";

const CurrentMovieContext = React.createContext({
  movieBanner: '',
  moviePoster: '',
  movieTitle: '',
  plot: '',
  genres: [],
  rating: 0,
  director: ''
});

export default CurrentMovieContext;