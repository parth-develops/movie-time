import MovieBanner from "../components/MovieBanner";
import MovieInfo from "../components/MovieInfo";
import classes from './MovieDetails.module.css';

const MovieDetails = () => {

  // fetch movie Detail
  // const fetchDetailMovie = async ()=>{
  //   const detailMovieResponse = await fetch('https://api.themoviedb.org/3/movie/985939?api_key=04ac2d661d8e80c601ac56804a64958b&language=en-US')
  //   const detailMovieData = detailMovieResponse.json()
  //   console.log(detailMovieData)
  //  }
  //  fetchDetailMovie()

  return (
    <div className={classes.MovieDetails}>
      <MovieBanner />
      <MovieInfo/>
    </div>
  );
};

export default MovieDetails;