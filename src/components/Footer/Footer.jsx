import React from "react";
import styles from './Footer.module.scss'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <a href="#" className={styles.link}>
        <AiFillGithub />
      </a>
      <a href="#" className={styles.link}>
        <AiFillLinkedin />
      </a>
    </footer>
  );
};
