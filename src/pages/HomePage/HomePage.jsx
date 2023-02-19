import TrendingMovies from 'modules/TrendingMovies/TrendingMovies';
import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      <TrendingMovies />
    </>
  );
};

export default HomePage;
