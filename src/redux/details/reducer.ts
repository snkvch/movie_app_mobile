import {
  MovieDetailsState,
  MovieDetailsActionTypes,
  ActionTypes,
  IMovieDetails,
} from './types';

const initialState: MovieDetailsState = {
  details: {} as IMovieDetails,
  loading: false,
  error: null,
};

const detailsReducer = (
  state = initialState,
  action: ActionTypes,
): MovieDetailsState => {
  switch (action.type) {
    case MovieDetailsActionTypes.DETAILS_FETCH_REQUESTED: {
      return { ...state, loading: true };
    }
    case MovieDetailsActionTypes.DETAILS_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    }
    case MovieDetailsActionTypes.DETAILS_FETCH_FAILED: {
      return { ...state, loading: false, error: action.payload };
    }
    case MovieDetailsActionTypes.REMOVE_MOVIE_DETAILS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default detailsReducer;
