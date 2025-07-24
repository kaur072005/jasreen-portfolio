import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Hi, I'm Jasreen Kaur</h1>
        <p className={styles.subheading}>
          A Passionate Web Developer with creative vision & modern design sense.
        </p>
        <a href="#contact" className={styles.button}>Hire Me</a>
      </div>
    </section>
  );
};

export default Hero;
