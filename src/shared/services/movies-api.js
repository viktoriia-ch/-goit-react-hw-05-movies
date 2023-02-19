import axios from 'axios';

const KEY = 'f382609d477ce9aec3e1d07c01aab879';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: KEY,
    language: 'en-US',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
      page: 1,
    },
  });
  return data;
};

export const getCastById = async id => {
  const {
    data: { cast },
  } = await instance.get(`/movie/${id}/credits`);
  return cast;
};

export const getReviewsById = async id => {
  const {
    data: { results },
  } = await instance.get(`/movie/${id}/reviews`);
  return results;
};
