import classes from './MovieBanner.module.css';
import { useCurrentMovieContext } from './contexts';

const MovieBanner = () => {
  const { currentMovie } = useCurrentMovieContext();

  return (
    <section className={classes['movie-banner']}>
      <img src={`https://image.tmdb.org/t/p/original${currentMovie?.movieBanner}`} alt={`${currentMovie?.movieTitle} Banner`} />
    </section>
  );
};

export default MovieBanner;