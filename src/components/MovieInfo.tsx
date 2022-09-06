import classes from './MovieInfo.module.css';

const MovieInfo = () => {
  return (
    <section className={classes.MovieInfo}>
      <div className={classes['movie-info-container']}>
        <div className={classes['movie-poster']}>
          <img src="http://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg" alt="movie poster" />
        </div>
        <div className={classes['movie-details']}>
          <h2 className={classes['movie-title']}>DC League of Super-Pets(Released)</h2>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;