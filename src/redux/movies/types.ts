export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Response {
  Response: string;
  Search: IMovie[];
}

export enum MoviesActionTypes {
  MOVIES_FETCH_REQUESTED = 'MOVIES_FETCH_REQUESTED',
  MOVIES_FETCH_SUCCEEDED = 'MOVIES_FETCH_SUCCEEDED',
  MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED',
}

export interface MoviesState {
  movies: IMovie[];
  errors: null | string;
  loading: boolean;
}

export interface FetchMoviesAction {
  type: MoviesActionTypes.MOVIES_FETCH_REQUESTED;
  payload?: string;
}
export interface FetchMoviesActionSucceeded {
  type: MoviesActionTypes.MOVIES_FETCH_SUCCEEDED;
  payload: IMovie[];
}
export interface FetchMoviesActionFailed {
  type: MoviesActionTypes.MOVIES_FETCH_FAILED;
  payload: string;
}

export type ActionTypes =
  | FetchMoviesAction
  | FetchMoviesActionSucceeded
  | FetchMoviesActionFailed;
