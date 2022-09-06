import classes from './MovieBanner.module.css';

const MovieBanner = () => {
  return (
    <section className={classes['movie-banner']}>
      <img src="http://image.tmdb.org/t/p/w1280/vvObT0eIWGlArLQx3K5wZ0uT812.jpg" alt="Movie banner" />
    </section>
  );
};

export default MovieBanner;