import React from "react";
import styles from "./MovieCard.module.css";
import { AiFillStar } from "react-icons/ai";
// type Props = {}

function MovieCard() {
  return (
    <div className={styles.movieCard}>
      <img
        className={styles.img}
        src="https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg"
        alt=""
      />
      <div>
        <h1 className={styles.movieName}>Movie Name</h1>
        <p className={styles.rating}>
          <AiFillStar size={20} style={{ color: "yellow" }} />
          <span className={styles.ratingNumber}>7.8</span>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
