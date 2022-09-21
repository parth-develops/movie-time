import React, { FC } from "react";
import styles from "./MovieOfTheWeek.module.css";
import { Link } from "react-router-dom";
import { useCurrentMovieContext } from "./contexts";

interface movieOftheWeek {
  id: number;
  title: string;
  overview: string;
  movieBanner: string;
}

interface YourComponentProps {
  movieOfTheWeek: movieOftheWeek;
}

const MovieOfTheWeekBanner = ({ movieOfTheWeek }: YourComponentProps) => {
  const { fetchCurrentMovie } = useCurrentMovieContext();

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
        <p className={styles.HeaderParagraph}>{movieOfTheWeek.overview}</p>
        <Link to="/detail">
          <button
            className={styles.HeaderButton}
            onClick={() => fetchCurrentMovie(movieOfTheWeek.id)}
          >
            See Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieOfTheWeekBanner;
