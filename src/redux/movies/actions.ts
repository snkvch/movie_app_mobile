import { MoviesActionTypes } from './types';

export const getMovie = (textInput?: string) => ({
  type: MoviesActionTypes.GET_MOVIE,
  payload: textInput,
});

export const setMovie = (movie: string) => ({
  type: MoviesActionTypes.SET_MOVIE,
  payload: movie,
});
