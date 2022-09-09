import React from "react";
import classes from "./App.module.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className={classes.App}>
      <Home />
      {/* <MovieDetails />       */}
    </div>
  );
}

export default App;
