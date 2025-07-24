import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.brand}>Jasreen</div>
      <div className={styles.links}>
        <a href="/RESUME 2.pdf"  className={styles.link}>
  About
</a>
        <a href="/waheguru/index.html" className={styles.link}>Projects</a>
        <a href="jasreenk033@gmail.com" className={styles.link}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
