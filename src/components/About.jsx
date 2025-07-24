import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.show : ''}`}
    >
      <div className={styles.aboutCard}>
        <h2>About Me</h2>
        <p>
          I'm a <strong>self-taught front-end developer</strong> passionate about building beautiful, responsive, and interactive websites.  
        </p>
        <p>
          My goal is to craft modern user interfaces with smooth animations and clean code that deliver the best user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
