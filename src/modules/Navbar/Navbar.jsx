import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <NavLink to="/" className={styles.link} key="home-page">
          <li>Home</li>
        </NavLink>

        <NavLink to="/movies" className={styles.link} key="movies-page">
          <li>Movies</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;
