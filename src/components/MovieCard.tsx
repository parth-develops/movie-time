import styles from "./MovieCard.module.css";
import { AiFillStar } from "react-icons/ai";
import { popularMovieResultObj } from "../type";
import { useCurrentMovieContext } from "./contexts";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

function MovieCard({
  title,
  vote_average,
  poster_path,
  id = 0,
}: popularMovieResultObj) {
  const { fetchCurrentMovie } = useCurrentMovieContext();
  const scrollToTop = useScrollToTop();

  return (
    <div className={styles.movieCard} onClick={() => {fetchCurrentMovie(id); scrollToTop();}}>
      <Link to="/detail">
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        </div>
        <div className={styles.movieCardInfo}>
          <h1 className={styles.movieName}>{title}</h1>
          <p className={styles.rating}>
            <AiFillStar
              size={20}
              style={{ color: "yellow" }}
              className={styles.ratingLogo}
            />
            <span className={styles.ratingNumber}>
              {vote_average?.toFixed(1)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
