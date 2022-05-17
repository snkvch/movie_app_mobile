import { MoviesState, MoviesActionTypes, ActionTypes } from './types';

const initialState: MoviesState = {
  movies: [],
  watchlist: [],
  loading: false,
  errors: null,
};

const moviesReducer = (
  state = initialState,
  action: ActionTypes,
): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.MOVIES_FETCH_REQUESTED: {
      return { ...state, loading: true };
    }

    case MoviesActionTypes.MOVIES_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    }

    case MoviesActionTypes.MOVIES_FETCH_FAILED: {
      return { ...state, loading: false, errors: action.payload };
    }

    case MoviesActionTypes.WATCHLIST_FETCH_REQUESTED: {
      return { ...state, loading: true };
    }

    case MoviesActionTypes.WATCHLIST_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        watchlist: action.payload,
      };
    }

    case MoviesActionTypes.WATCHLIST_FETCH_FAILED: {
      return { ...state, loading: false, errors: action.payload };
    }
    case MoviesActionTypes.ADD_MOVIE_TO_WATCHLIST: {
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    }

    case MoviesActionTypes.REMOVE_MOVIE_FROM_WATCHLIST: {
      const results = state.watchlist.filter(
        (movie) => movie.imdbID !== action.payload.imdbID,
      );
      return { ...state, watchlist: results };
    }

    case MoviesActionTypes.REMOVE_WATCHLIST: {
      return initialState;
    }

    default:
      return state;
  }
};

export default moviesReducer;
