import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <input type="text" placeholder="Search..." className={styles.search_box}/>
    </header>
  );
};
