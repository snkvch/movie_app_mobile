import { MoviesState, MoviesActionTypes, ActionTypes } from './types';

const initialState: MoviesState = {
  movies: [],
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
    default:
      return state;
  }
};

export default moviesReducer;
