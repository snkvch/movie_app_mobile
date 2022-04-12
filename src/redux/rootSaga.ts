import { all } from '@redux-saga/core/effects';

import watcherFetchMovies from './movies/sagas';
import watcherFetchMoviedetails from './details/sagas';

export default function* rootSaga() {
  yield all([watcherFetchMovies(), watcherFetchMoviedetails()]);
}
