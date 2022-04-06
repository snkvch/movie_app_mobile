import { takeEvery, put, call } from '@redux-saga/core/effects';
import fetchMovies from '../../api/fetchMovies';
import { storeMovies } from './actions';
import { MoviesActionTypes, FetchMoviesActionSucceeded } from './types';

function* requestMovies({ payload }: FetchMoviesActionSucceeded) {
  try {
    const { data: movies } = yield call(fetchMovies, payload);
    yield put(storeMovies(movies));
  } catch (error) {
    yield put({ type: MoviesActionTypes.MOVIES_FETCH_FAILED });
  }
}

function* watcherFetchMovies() {
  yield takeEvery(MoviesActionTypes.MOVIES_FETCH_REQUESTED, requestMovies);
}

export default watcherFetchMovies;
