<<<<<<< HEAD
import React, { FC } from "react";
import styles from "./MovieOfTheWeek.module.css";
import { Link } from "react-router-dom";
import { useCurrentMovieContext } from './contexts';
=======
import React, { useContext } from "react";
import styles from "./MovieOfTheWeek.module.css";
import { Link } from "react-router-dom";
import { CurrentMovieFetcher } from "./CurrentMovieContext";
>>>>>>> 5e93bdb (BEFORE Movie Details Completed~)

interface movieOfTheWeek {
  id: number;
  title: string;
  overview: string;
  movieBanner: string;
}

interface YourComponentProps {
  movieOfTheWeek: movieOfTheWeek;
}

<<<<<<< HEAD
const MovieOfTheWeekBanner = ({ movieOfTheWeek }: YourComponentProps) => {
  const { currentMovie, fetchCurrentMovie } = useCurrentMovieContext();
=======
function MovieOfTheWeekBanner({ movieOfTheWeek }: YourComponentProps) {
  const CurrentMovieObj = useContext(CurrentMovieFetcher);
>>>>>>> 5e93bdb (BEFORE Movie Details Completed~)

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
<<<<<<< HEAD
          <button className={styles.HeaderButton} onClick={() => fetchCurrentMovie(movieOfTheWeek.id)} >
=======
          <button
            className={styles.HeaderButton}
            onClick={CurrentMovieObj.fetchCurrentMovieInfo(movieOfTheWeek.id)}
          >
>>>>>>> 5e93bdb (BEFORE Movie Details Completed~)
            See Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieOfTheWeekBanner;
