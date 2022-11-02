import React from "react";
import styles from './Footer.module.scss'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <a href="https://github.com/byKriz/ReactMovieApp" className={styles.link} target='_blank'>
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/cristian-esquivel-351613135/" className={styles.link} target='_blank'>
        <AiFillLinkedin />
      </a>
    </footer>
  );
};
