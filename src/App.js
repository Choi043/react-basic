import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie 
        movie={movie} 
        key = {movie.id}
        removeMovie={removeMovie}
      />
    );
  }) : '추가된 영화가 없습니다.';
  const addMovie = (movie) =>{
    setMovies([
      ...movies,
        movie
    ]);
  };
  return (
      <div className="App">
        <Navbar />
          <h1>Movie list</h1>
          <MovieForm addMovie={addMovie}/>
          { renderMovies }
          <h1>Users</h1>
          <h1>Home</h1>
      </div>
  );
}

export default App;
