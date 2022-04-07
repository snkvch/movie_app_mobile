import { combineReducers } from 'redux';

import moviesReducer from './movies/reducer';
import { IMovies } from './movies/types';

export interface StoreState {
  movies: IMovies[];
}
const rootReducer = combineReducers({ movies: moviesReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
