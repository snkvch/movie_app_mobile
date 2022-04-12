import { combineReducers } from 'redux';
import detailsReducer from './details/reducer';

import moviesReducer from './movies/reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  details: detailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
