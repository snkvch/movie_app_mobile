import { MovieDetailsActionTypes, IMovieDetails } from './types';

export const fetchMovieDetails = (imdbId: string) =>
  ({
    type: MovieDetailsActionTypes.DETAILS_FETCH_REQUESTED,
    payload: imdbId,
  } as const);

export const storeMovieDetails = (details: IMovieDetails) =>
  ({
    type: MovieDetailsActionTypes.DETAILS_FETCH_SUCCEEDED,
    payload: details,
  } as const);

export const removeMovieDetails = () =>
  ({
    type: MovieDetailsActionTypes.REMOVE_MOVIE_DETAILS,
  } as const);
