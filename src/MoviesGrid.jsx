import React from "react";
import { MovieCard } from "./MovieCard";
import movies from './movies.json' //al importar un json se transforma en array
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}
