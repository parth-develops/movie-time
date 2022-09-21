import styles from "./MovieCard.module.css";
import { AiFillStar } from "react-icons/ai";
import { popularMovieResultObj } from "../type";

function MovieCard({
  id,
  title,
  vote_average,
  poster_path,
}: popularMovieResultObj) {
  return (
    <div className={styles.movieCard} key={id}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
      />
      <div>
        <h1 className={styles.movieName}>{title}</h1>
        <p className={styles.rating}>
          <AiFillStar
            size={20}
            style={{ color: "yellow" }}
            className={styles.ratingLogo}
          />
          <span className={styles.ratingNumber}>{vote_average}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
