import { combineReducers } from 'redux';

import moviesReducer from './movies/reducer';
import { IMovies } from './movies/types';

export interface StoreState {
  movies: IMovies[];
}

const rootReducer = combineReducers<StoreState>({ movies: moviesReducer });

export default rootReducer;
