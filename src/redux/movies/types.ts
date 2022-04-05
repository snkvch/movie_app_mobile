export interface IMovies {
  data: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
}

export enum MoviesActionTypes {
  GET_MOVIE = 'GET_MOVIE',
  SET_MOVIE = 'SET_MOVIE',
  MOVIES_FETCH_FAILED = 'MOVIES_FETCH_FAILED',
}

export interface FetchMoviesAction {
  type: MoviesActionTypes.SET_MOVIE;
  payload: IMovies[];
}
