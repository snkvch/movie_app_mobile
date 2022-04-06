import { MoviesActionTypes, IMovies } from './types';

export const fetchMovies = (textInput?: string) => ({
  type: MoviesActionTypes.MOVIES_FETCH_REQUESTED,
  payload: textInput,
});

export const storeMovies = (movies: IMovies[]) => ({
  type: MoviesActionTypes.MOVIES_FETCH_SUCCEEDED,
  payload: movies,
});
