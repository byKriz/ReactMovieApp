import React from "react";
import styles from "./MovieItem.module.scss";
import { apiConfig } from "../../api/apiConfig";
import { NoImage } from "../NoImage/NoImage";

export const MovieIteam = ({ data }) => {
  console.log(data.poster_path);

  return (
    <div className={styles.Movie_item}>
      {data.poster_path === null ? (
        <NoImage />
      ) : (
        <img src={`${apiConfig.images}${data.poster_path}`} alt={data.title} />
      )}
      <div className={styles.movie_info}>
        <h3>{data.title}</h3>
        <span>{data.vote_average}</span>
      </div>

      <div className={styles.movie_over}>
        <h2>Overview:</h2>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};
