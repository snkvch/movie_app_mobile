import { MoviesActionTypes, IMovies, FetchMoviesAction } from './types';

const moviesReducer = (
  state: IMovies[] = [],
  action: FetchMoviesAction = {
    type: MoviesActionTypes.SET_MOVIE,
    payload: [],
  },
) => {
  switch (action.type) {
    case MoviesActionTypes.SET_MOVIE: {
      const movie = action.payload;
      return { ...state, movie };
    }
    default:
      return state;
  }
};

export default moviesReducer;
