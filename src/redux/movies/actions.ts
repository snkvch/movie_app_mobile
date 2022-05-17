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

export const fetchWatchlist = () =>
  ({
    type: MoviesActionTypes.WATCHLIST_FETCH_REQUESTED,
  } as const);

export const storeWatchlist = (movies: { id: string }[]) =>
  ({
    type: MoviesActionTypes.WATCHLIST_FETCH_SUCCEEDED,
    payload: movies,
  } as const);

export const addToWatchlist = (imdbID: IMovie) =>
  ({
    type: MoviesActionTypes.ADD_MOVIE_TO_WATCHLIST,
    payload: imdbID,
  } as const);

export const removeFromWatchlist = (imdbID: IMovie) =>
  ({
    type: MoviesActionTypes.REMOVE_MOVIE_FROM_WATCHLIST,
    payload: imdbID,
  } as const);
