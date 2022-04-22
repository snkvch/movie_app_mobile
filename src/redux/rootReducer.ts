import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import detailsReducer from './details/reducer';
import moviesReducer from './movies/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  details: detailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
