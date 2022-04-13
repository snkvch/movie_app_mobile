import {
  takeEvery,
  put,
  call,
  CallEffect,
  PutEffect,
} from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';

import { getMoviesFetch } from '../../api/fetchMovies';
import { storeMovies } from './actions';
import { MoviesActionTypes, Response, FetchMoviesAction } from './types';

function* requestMovies({
  payload,
}: FetchMoviesAction): Generator<CallEffect | PutEffect, void, never> {
  try {
    const { data }: AxiosResponse<Response> = yield call(
      getMoviesFetch,
      payload,
    );
    yield put(storeMovies(data.Search));
  } catch (error) {
    yield put({ type: MoviesActionTypes.MOVIES_FETCH_FAILED });
  }
}

function* watcherFetchMovies() {
  yield takeEvery(MoviesActionTypes.MOVIES_FETCH_REQUESTED, requestMovies);
}

export default watcherFetchMovies;
