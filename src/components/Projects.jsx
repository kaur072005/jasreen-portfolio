import React, { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${styles.projectsSection} ${isVisible ? styles.show : ''}`}
    >
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Portfolio Website</h3>
            <p>This personal website showcases my frontend skills and creativity.</p>
            <div class="buttons">
            <a href="/website/index.html" className={styles.btn} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a href="/waheguru/index.html" className={styles.btn} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            </div>
          </div>

          {/* Add more projects here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
