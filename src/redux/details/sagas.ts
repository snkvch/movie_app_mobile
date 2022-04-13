import {
  takeEvery,
  put,
  call,
  CallEffect,
  PutEffect,
} from '@redux-saga/core/effects';

import { getMovieDetailsFetch } from '../../api/fetchMovies';
import { storeMovieDetails } from './actions';
import { MovieDetailsActionTypes, FetchMovieDetailsAction } from './types';

function* requestDetails({
  payload,
}: FetchMovieDetailsAction): Generator<CallEffect | PutEffect, void, never> {
  try {
    const { data } = yield call(getMovieDetailsFetch, payload);
    yield put(storeMovieDetails(data));
  } catch (error) {
    yield put({ type: MovieDetailsActionTypes.DETAILS_FETCH_FAILED });
  }
}

function* watcherFetchMoviedetails() {
  yield takeEvery(
    MovieDetailsActionTypes.DETAILS_FETCH_REQUESTED,
    requestDetails,
  );
}

export default watcherFetchMoviedetails;
