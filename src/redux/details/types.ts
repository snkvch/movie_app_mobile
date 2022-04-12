export interface IMovieDetails {
  Title: string;
  imdbRating: string;
  imdbVotes: string;
  Runtime: string;
  Year: string;
  Plot: string;
  Director: string;
  Actors: string;
  Genre: string;
  Language: string;
  Awards: string;
  Poster: string;
  Response: string;
}

export interface MovieDetailsState {
  details: IMovieDetails;
  error: null | string;
  loading: boolean;
}

export enum MovieDetailsActionTypes {
  DETAILS_FETCH_REQUESTED = 'DETAILS_FETCH_REQUESTED',
  DETAILS_FETCH_SUCCEEDED = 'DETAILS_FETCH_SUCCEEDED',
  DETAILS_FETCH_FAILED = 'DETAILS_FETCH_FAILED',
  REMOVE_MOVIE_DETAILS = 'REMOVE_MOVIE_DETAILS',
}

export interface FetchMovieDetailsAction {
  type: MovieDetailsActionTypes.DETAILS_FETCH_REQUESTED;
  payload: string;
}
export interface FetchMovieDetailsActionSucceeded {
  type: MovieDetailsActionTypes.DETAILS_FETCH_SUCCEEDED;
  payload: IMovieDetails;
}
export interface FetchMovieDetailsActionFailed {
  type: MovieDetailsActionTypes.DETAILS_FETCH_FAILED;
  payload: string;
}

export interface RemoveMovieDetailsFetch {
  type: MovieDetailsActionTypes.REMOVE_MOVIE_DETAILS;
}

export type ActionTypes =
  | FetchMovieDetailsAction
  | FetchMovieDetailsActionSucceeded
  | FetchMovieDetailsActionFailed
  | RemoveMovieDetailsFetch;
