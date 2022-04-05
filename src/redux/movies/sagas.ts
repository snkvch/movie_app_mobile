import { takeEvery, call, put } from '@redux-saga/core/effects';

import fetchMovies from '../../api/fetchMovies';
import { setMovie } from './actions';
import { FetchMoviesAction, MoviesActionTypes } from './types';

function* requestMovie({ payload }: FetchMoviesAction): Generator {
  try {
    const response = yield call(fetchMovies, payload);
    const { data } = response;
    yield put(setMovie(data));
  } catch (error) {
    yield put({ type: MoviesActionTypes.MOVIES_FETCH_FAILED });
  }
}

function* watcherFetchMovies() {
  yield takeEvery(MoviesActionTypes.GET_MOVIE, requestMovie);
}

export default watcherFetchMovies;
