import React from "react";
import styles from "./Navbar.module.css";

// type Props = {}

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a className={styles.a} href="/">
        MovieTime
      </a>
      <input
        className={styles.input}
        type="search"
        placeholder="Search movie"
      />
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>Movie</li>
      </ul>
    </nav>
  );
}

export default Navbar;
