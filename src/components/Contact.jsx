import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles.contactSection} ${isVisible ? styles.show : ''}`}
    >
      <h2 className={styles.animatedTitle}>Let's Connect ✨</h2>
      <p className={styles.subText}>Feel free to reach out any time!</p>
      <div className={styles.contactLinks}>
        <a href="mailto:jasreenk033@gmail.com.com" className={styles.contactLink}>jasreenk033@gmail.com</a>
        <a href="https://www.linkedin.com/in/jasreen-kaur-1aa078342" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
