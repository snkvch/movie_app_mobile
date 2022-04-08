import { MoviesActionTypes, IMovie } from './types';

export const fetchMovies = (textInput?: string) =>
  ({
    type: MoviesActionTypes.MOVIES_FETCH_REQUESTED,
    payload: textInput,
  } as const);

export const storeMovies = (movies: IMovie[]) =>
  ({
    type: MoviesActionTypes.MOVIES_FETCH_SUCCEEDED,
    payload: movies,
  } as const);
