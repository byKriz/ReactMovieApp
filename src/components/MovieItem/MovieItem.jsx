import React from "react";
import styles from "./MovieItem.module.scss";
import { apiConfig } from "../../api/apiConfig";

export const MovieIteam = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.Movie_item}>
      <img src={`${apiConfig.images}${data.poster_path}`} alt={data.title} />
      <div className={styles.movie_info}>
        <h3>{data.title}</h3>
        <span>{data.vote_average}</span>
      </div>
    </div>
  );
};
