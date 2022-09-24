import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import SearchMovieModal from "../components/SearchMovieModal";
import { searchMovieResults } from "../type";

// react icons
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [movieResults, setMovieResults] = useState<searchMovieResults>();

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    const fetchSearchMovies = async () => {
      const searchMovieResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      );
      const searchedMovies = await searchMovieResponse.json();
      const { results } = searchedMovies;

      setMovieResults(results);
    };

    fetchSearchMovies();
  }, [searchQuery]);

  const closeModal = () => {
    setSearchQuery("");
  };
  return (
    <nav className={styles.nav}>
      <a className={styles.a} href="/">
        MovieTime
      </a>

      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Movie"
          value={searchQuery}
          onChange={(event) => handelChange(event)}
        />
        {searchQuery ? (
          <AiOutlineClose onClick={closeModal} className={styles.icon} />
        ) : (
          <AiOutlineSearch className={styles.icon} />
        )}
        {searchQuery && <SearchMovieModal movieResults={movieResults} onCloseModal={closeModal}/>}
      </div>
    </nav>
  );
}

export default Navbar;
