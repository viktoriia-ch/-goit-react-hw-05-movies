import { useState, useEffect, useCallback } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieById } from '../../shared/services/movies-api';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import defaultPoster from '../../shared/images/movie-poster.jpg';
import styles from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async id => {
      try {
        const recievedMovie = await getMovieById(id);
        setMovie(recievedMovie);
        setPoster(
          recievedMovie.poster_path
            ? `https://image.tmdb.org/t/p/w300/${recievedMovie.poster_path}`
            : defaultPoster
        );
        setGenres(recievedMovie.genres);
      } catch ({ response }) {
        Notify.failure(response.data.status_message);
      }
    };
    fetchMovie(id);
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [navigate, from]);

  const userScore = Number(movie.vote_average * 10);
  const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={goBack} className={styles.button}>
          <IoIosArrowRoundBack className={styles.icon} />
        </button>

        <div className={styles.block}>
          <img src={poster} alt={movie.title} className={styles.poster} />

          <div className={styles.data}>
            <h3 className={styles.title}>
              {movie.title} (
              {movie.release_date ? movie.release_date.substr(0, 4) : ' '})
            </h3>

            <p className={styles.info}>User Score: {Math.round(userScore)}%</p>

            <h4 className={styles.title}>Overview</h4>
            <p className={styles.info}>{movie.overview}</p>

            <h4 className={styles.title}>Genres</h4>
            <ul className={styles.info}>{genresList}</ul>

            <h4 className={styles.title}>Addition information</h4>

            <Link to="cast" state={{ from }} className={styles.link}>
              Cast
            </Link>
            <Link to="reviews" state={{ from }} className={styles.link}>
              Reviews
            </Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
