import React from 'react';
import classes from './App.module.css';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className={classes.App}>
      <MovieDetails />      
    </div>
  );
}

export default App;