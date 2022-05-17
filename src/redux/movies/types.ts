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
  //
  WATCHLIST_FETCH_REQUESTED = 'WATCHLIST_FETCH_REQUESTED',
  WATCHLIST_FETCH_SUCCEEDED = 'WATCHLIST_FETCH_SUCCEEDED',
  WATCHLIST_FETCH_FAILED = 'WATCHLIST_FETCH_FAILED',

  ADD_MOVIE_TO_WATCHLIST = 'ADD_MOVIE_TO_WATCHLIST',
  REMOVE_MOVIE_FROM_WATCHLIST = 'REMOVE_MOVIE_FROM_WATCHLIST',
}

export interface MoviesState {
  movies: IMovie[];
  watchlist: IMovie[];
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

export interface FetchWatchlistAction {
  type: MoviesActionTypes.WATCHLIST_FETCH_REQUESTED;
}

export interface FetchWatchlistActionSucceeded {
  type: MoviesActionTypes.WATCHLIST_FETCH_SUCCEEDED;
  payload: IMovie[];
}

export interface FetchWatchlistActionFailed {
  type: MoviesActionTypes.WATCHLIST_FETCH_FAILED;
  payload: string;
}

export interface AddToMovieWatchlist {
  type: MoviesActionTypes.ADD_MOVIE_TO_WATCHLIST;
  payload: IMovie;
}

export interface RemoveMovieFromWatchlist {
  type: MoviesActionTypes.REMOVE_MOVIE_FROM_WATCHLIST;
  payload: IMovie;
}

export type ActionTypes =
  | FetchMoviesAction
  | FetchMoviesActionSucceeded
  | FetchMoviesActionFailed
  | AddToMovieWatchlist
  | RemoveMovieFromWatchlist
  | FetchWatchlistActionSucceeded
  | FetchWatchlistAction
  | FetchWatchlistActionFailed;
