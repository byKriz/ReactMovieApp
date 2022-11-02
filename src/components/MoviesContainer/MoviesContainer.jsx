import React from "react";
import { useState, useEffect } from "react";
import { apiConfig } from "../../api/apiConfig";
import { MovieIteam } from "../MovieItem/MovieItem";
import axios from "axios";

export const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  // console.log(apiConfig.feature)

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios.get(apiConfig.feature);
      // console.log(result.data.results)
      setMovies(result.data.results);
    };

    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.length === 0 && <p>Cargando...</p>}
      {movies.map((movie) => {
        return <MovieIteam key={movie.id} data={movie} />;
      })}
    </div>
  );
};
