<<<<<<< HEAD
import classes from './MovieBanner.module.css';
import { useCurrentMovieContext } from './contexts';

const MovieBanner = () => {
  const { currentMovie } = useCurrentMovieContext();

  return (
    <section className={classes['movie-banner']}>
      <img src={`https://image.tmdb.org/t/p/original${currentMovie?.movieBanner}`} alt={`${currentMovie?.movieTitle} Banner`} />
=======
import { useContext } from "react";
import { currentMovie } from "./CurrentMovieContext";
import classes from "./MovieBanner.module.css";

const MovieBanner = () => {
  const currentMovieObj = useContext(currentMovie);

  return (
    <section className={classes["movie-banner"]}>
      <img src={} alt="Movie banner" />
>>>>>>> 5e93bdb (BEFORE Movie Details Completed~)
    </section>
  );
};

export default MovieBanner;
