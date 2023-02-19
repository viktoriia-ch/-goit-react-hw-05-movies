import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './movies-list.module.css';
import defaultPoster from '../../images/movie-poster.jpg';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const setImages = poster_path => {
    return poster_path
      ? `https://image.tmdb.org/t/p/w200/${poster_path}`
      : defaultPoster;
  };

  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id} className={styles.item}>
      <Link
        to={`/movies/${id}`}
        className={styles.link}
        state={{ from: location }}
      >
        <img
          src={setImages(poster_path)}
          alt={title}
          className={styles.image}
        />
        <p className={styles.title}>{title}</p>
      </Link>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.array,
};
