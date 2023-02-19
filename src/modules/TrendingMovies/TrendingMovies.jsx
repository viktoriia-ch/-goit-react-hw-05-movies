import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesList from '../../shared/components/MoviesList/MoviesList';
import { getTrendingMovies } from '../../shared/services/movies-api';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch ({ response }) {
        Notify.failure(response.data.status_message);
      }
    };
    fetchMovies();
  }, []);

  return <MoviesList items={movies} />;
};

export default TrendingMovies;
