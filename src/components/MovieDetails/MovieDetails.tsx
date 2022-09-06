import React from "react";
import MovieBanner from "./MovieBanner";
import classes from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <div className={classes.MovieDetails}>
      <MovieBanner />
    </div>
  );
};

export default MovieDetails;