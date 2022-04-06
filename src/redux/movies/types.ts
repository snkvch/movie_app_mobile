export interface IMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export enum MoviesActionTypes {
  MOVIES_FETCH_REQUESTED = 'MOVIES_FETCH_REQUESTED',
  MOVIES_FETCH_SUCCEEDED = 'MOVIES_FETCH_SUCCEEDED',
  MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED',
}

export interface MoviesState {
  readonly movies: IMovies[];
  readonly errors: [] | null;
  readonly loading: boolean;
}

export interface FetchMoviesAction {
  type: MoviesActionTypes.MOVIES_FETCH_REQUESTED;
}
export interface FetchMoviesActionSucceeded {
  type: MoviesActionTypes.MOVIES_FETCH_SUCCEEDED;
  payload: {
    movies: IMovies[];
  };
}
export interface FetchMoviesActionFailed {
  type: MoviesActionTypes.MOVIES_FETCH_FAILED;
  payload: {
    error: Error | string;
  };
}

export type ActionTypes =
  | FetchMoviesAction
  | FetchMoviesActionSucceeded
  | FetchMoviesActionFailed;
