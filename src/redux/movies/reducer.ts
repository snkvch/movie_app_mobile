import { MoviesState, MoviesActionTypes, ActionTypes } from './types';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  errors: null,
};

const questionReducer = (
  state: MoviesState = initialState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case MoviesActionTypes.MOVIES_FETCH_REQUESTED: {
      return { ...state, loading: true };
    }
    case MoviesActionTypes.MOVIES_FETCH_SUCCEEDED: {
      const movies = action.payload;
      return { ...state, loading: false, movies };
    }
    case MoviesActionTypes.MOVIES_FETCH_FAILED: {
      return { ...state, loading: false, error: true };
    }
    default:
      return state;
  }
};

export default questionReducer;
