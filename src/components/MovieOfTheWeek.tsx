import React from "react";
import styles from "./MovieOfTheWeek.module.css";
import { Link } from "react-router-dom";

interface movieOftheWeek {
  id: number
  title: string
  overview: string
  movieBanner: string
}

interface YourComponentProps {
  movieOfTheWeek: movieOftheWeek
}

function MovieOfTheWeekBanner({ movieOfTheWeek }: YourComponentProps) {
  return (
    <div className={styles.popularMovie}>
      <img
        src={`https://image.tmdb.org/t/p/original${movieOfTheWeek.movieBanner}`}
        className={styles.img}
        alt="Current Movie Banner"
      />
      <h1 className={styles.HeaderHeadline}>Movie Of The week</h1>
      <div className={styles.movieInfo}>
        <h2 className={styles.HeaderMovieName}>{movieOfTheWeek.title}</h2>
        <p className={styles.HeaderParagraph}>
          {movieOfTheWeek.overview}
        </p>
        <Link to="/detail">
          <button className={styles.HeaderButton} onClick={fetchCurrentMovieInfo} >See Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieOfTheWeekBanner;
