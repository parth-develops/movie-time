import MovieBanner from "../components/MovieBanner";
import MovieInfo from "../components/MovieInfo";
import classes from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <div className={classes.MovieDetails}>
      <MovieBanner />
      <MovieInfo/>
    </div>
  );
};

export default MovieDetails;