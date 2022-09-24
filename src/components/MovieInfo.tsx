import classes from "./MovieInfo.module.css";
import { useCurrentMovieContext } from "./contexts";
import { AiFillStar } from "react-icons/ai";

const MovieInfo = () => {
  const { currentMovie } = useCurrentMovieContext();

  return (
    <section className={classes.MovieInfo}>
      <div className={classes["movie-info-container"]}>
        <div className={classes["movie-poster"]}>
          <img
            src={`https://image.tmdb.org/t/p/original${currentMovie?.moviePoster}`}
            alt={`${currentMovie?.movieTitle} Poster`}
          />
        </div>
        <div className={classes["movie-details"]}>
          <h2 className={classes["movie-title"]}>{currentMovie?.movieTitle}</h2>
          <div className="plot">
            <h4>plot</h4>
            <p className={classes["movie-plot"]}>{currentMovie?.plot}</p>
          </div>
          <div className="genre">
            <h4>genres</h4>
            <ul className={classes.genres}>
              {currentMovie?.genres?.map((genreObj) => (
                <li key={genreObj.id}>{genreObj.name}</li>
              ))}
            </ul>
          </div>
          <div className="rating">
            <h4>IMDB Rating</h4>
            <p className={classes.ratings}>
              <AiFillStar
                size={20}
                style={{ color: "yellow" }}
                className={classes.ratingLogo}
              />
              <span>{currentMovie?.rating?.toFixed(1)}</span>
            </p>
          </div>
          <div className="extra-info">
            <h4>Director</h4>
            <p>{currentMovie?.directors?.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;