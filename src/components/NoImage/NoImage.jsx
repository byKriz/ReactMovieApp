import React from "react";
import styles from "./NoImage.module.scss";
import { MdOutlineHideImage } from "react-icons/md";

export const NoImage = () => {
  return (
    <div className={styles.NoImage}>
      <MdOutlineHideImage />
    </div>
  );
};
