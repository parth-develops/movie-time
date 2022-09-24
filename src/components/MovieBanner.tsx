import classes from "./MovieBanner.module.css";
import { useCurrentMovieContext } from "./contexts";

const MovieBanner = () => {
  const { currentMovie } = useCurrentMovieContext();

  return (
    <section className={classes["movie-banner"]}>
      <div className={classes.bannerWrapper}>
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${currentMovie?.movieBanner}`}
          alt={`${currentMovie?.movieTitle} Banner`}
        />
      </div>
    </section>
  );
};

export default MovieBanner;
