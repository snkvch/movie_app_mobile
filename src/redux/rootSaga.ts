import { all } from '@redux-saga/core/effects';

import watcherFetchMovies from './movies/sagas';

export default function* rootSaga(): Generator<object> {
  yield all([watcherFetchMovies()]);
}
