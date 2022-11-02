import React from "react";
import { useState, useEffect } from "react";
import { apiConfig } from "../../api/apiConfig";
import { MovieIteam } from "../MovieItem/MovieItem";
import axios from "axios";
import styles from "./MoviesContainer.module.scss";

export const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios.get(apiConfig.feature);
      setMovies(result.data.results);
    };

    getMovies();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const getMoviesSearch = async () => {
      const result = await axios.get(apiConfig.search + searchTerm);
      setMovies(result.data.results);
    };

    getMoviesSearch();
  };

  const handleOnSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      {/* Header y buscador de peliculas */}
      <header className={styles.Header}>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search_box}
            value={searchTerm}
            onChange={handleOnSearch}
          />
        </form>
      </header>

      {/* Contenedor de peliculas */}
      <div className={styles.Movies_container}>
        {movies.length === 0 && <p>Loading...</p>}
        {movies.map((movie) => {
          return <MovieIteam key={movie.id} data={movie} />;
        })}
      </div>
    </>
  );
};
