import React from "react";
import styles from "./PopularMovieBanner.module.css";
// type Props = {}

function PopularMovieBanner() {
  return (
    <div className={styles.popularMovie}>
      <img
        src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/26/1600x800/landscape-1498738748-spoder.jpg?resize=980:*"
        className={styles.img}
      />
      <div className={styles.headerText}>
        <h1 className={styles.HeaderHeadline}>Movie Of The week</h1>
        <h2 className={styles.HeaderMovieName}>Spider Man</h2>
        <p className={styles.HeaderParagraph}>
          Peter Parker is unmasked and no longer able to separate his normal
          life from the high-stakes of being a super-hero. When he asks for help
          from Doctor Strange the stakes become even more dangerous, forcing him
          to discover what it truly means to be Spider-Man.
        </p>
        <button className={styles.HeaderButton}>See Detail</button>
      </div>
    </div>
  );
}

export default PopularMovieBanner;
