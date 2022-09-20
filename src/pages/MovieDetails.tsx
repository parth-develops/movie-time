import MovieBanner from "../components/MovieBanner";
import MovieInfo from "../components/MovieInfo";
import classes from './MovieDetails.module.css';
import Navbar from "../components/Navbar";

const MovieDetails = () => {
  return (
    <div className={classes.MovieDetails}>
      <Navbar />
      <MovieBanner />
      <MovieInfo/>
    </div>
  );
};

export default MovieDetails;