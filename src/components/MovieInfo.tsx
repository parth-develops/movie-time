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
          <div className='plot'>
            <h4>PLOT</h4>
            <p className={classes['movie-plot']}>When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.</p>
          </div>
          <div className='genre'>
            <h4>GENRES</h4>
            <ul className={classes.genres}>
              <li>Animation</li>
              <li>Animation</li>
              <li>Animation</li>
              <li>Animation</li>
              <li>Animation</li>
            </ul>
          </div>
          <div className="rating">
            <h4>IMBD RATING</h4>
            <p>5.267</p>
          </div>
          <div className='extra-info'>
            <h4>DIRECTOR</h4>
            <p>Jared Stern</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;