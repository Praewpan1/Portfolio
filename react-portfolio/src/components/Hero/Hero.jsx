import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> I'm </h1>
        <p className={styles.description}>i'm sick</p>
        <a href="mailto:praewpan1397@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage1.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.toBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
