import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesSearchForm from './MoviesSearchForm/MoviesSearchForm';
import { getMoviesByQuery } from '../../shared/services/movies-api';
import MoviesList from 'shared/components/MoviesList/MoviesList';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await getMoviesByQuery(search);
        setMovies(results);
      } catch ({ response }) {
        Notify.failure(response.data.status_message);
      }
    };
    fetchMovies();
  }, [search]);

  const getMovies = search => {
    setSearchParams({ search });
  };

  return (
    <>
      <MoviesSearchForm onSubmit={getMovies} />
      <MoviesList items={movies} />
    </>
  );
};

export default MoviesSearch;
