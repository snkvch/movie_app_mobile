import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Flipper from 'redux-flipper';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { IMovieDetails } from './details/types';
import { IMovie } from './movies/types';

const sagaMiddleware = createSagaMiddleware();
const middlewareToApply = [sagaMiddleware];

export interface StoreState {
  movies: IMovie[];
  details: IMovieDetails;
}

if (__DEV__) {
  const createDebugger = Flipper;
  middlewareToApply.push(createDebugger() as never);
}

const middleware = applyMiddleware(...middlewareToApply);
const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
