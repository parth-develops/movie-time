import classes from './MovieInfo.module.css';
import { useCurrentMovieContext } from './contexts';

const MovieInfo = () => {
  const { currentMovie } = useCurrentMovieContext();

  return (
    <section className={classes.MovieInfo}>
      <div className={classes['movie-info-container']}>
        <div className={classes['movie-poster']}>
          <img src={`https://image.tmdb.org/t/p/original${currentMovie?.moviePoster}`} alt={`${currentMovie?.movieTitle} Poster`} />
        </div>
        <div className={classes['movie-details']}>
          <h2 className={classes['movie-title']}>{currentMovie?.movieTitle}</h2>
          <div className='plot'>
            <h4>PLOT</h4>
            <p className={classes['movie-plot']}>{currentMovie?.plot}</p>
          </div>
          <div className='genre'>
            <h4>GENRES</h4>
            <ul className={classes.genres}>
              {currentMovie?.genres?.map((genreObj) => (
                <li key={genreObj.id}>{genreObj.name}</li>
              ))}
            </ul>
          </div>
          <div className="rating">
            <h4>IMBD RATING</h4>
            <p>{currentMovie?.rating?.toFixed(1)}</p>
          </div>
          <div className='extra-info'>
            <h4>DIRECTOR</h4>
            <p>{currentMovie?.directors?.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;