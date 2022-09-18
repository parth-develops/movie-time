import React from "react";
import styles from "./PopularMovieBanner.module.css";
import { Link } from "react-router-dom";
// type Props = {}

// type objType = { 
//   title:string,
//   overview:string
// }

// const popularMovieBannerProps:objType = {

// }

interface movieOftheWeek {
  title: string
  overview: string
  movieBanner: string
}

interface YourComponentProps {
  movieOfTheWeek: movieOftheWeek
}

function PopularMovieBanner({ movieOfTheWeek }: YourComponentProps) {

  //const baseImageUrl = https://image.tmdb.org/t/p/original

  return (
    <div className={styles.popularMovie}>
      <img
        src={`https://image.tmdb.org/t/p/original${movieOfTheWeek.movieBanner}`}
        className={styles.img}
        alt="Current Movie Banner"
      />
      <div className={styles.headerText}>
        <h1 className={styles.HeaderHeadline}>Movie Of The week</h1>
        <div>
          <h2 className={styles.HeaderMovieName}>{movieOfTheWeek.title}</h2>
          <p className={styles.HeaderParagraph}>
            {movieOfTheWeek.overview}
          </p>
          <Link to="/detail">
            <button className={styles.HeaderButton}>See Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopularMovieBanner;
