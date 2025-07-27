import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="mailto:jasreenk033@gmail.com" target="_blank" rel="noopener noreferrer">📧 jasreenk033@gmail.com</a>
        <a href="https://linkedin.com/in/jasreen-kaur" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
      </div>
      <div className={styles.copy}>
        <p>© 2025 <span className={styles.name}>Jasreen Kaur</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
