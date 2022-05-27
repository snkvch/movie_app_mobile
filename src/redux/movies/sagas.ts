import {
  takeEvery,
  put,
  call,
  CallEffect,
  PutEffect,
} from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { Alert } from 'react-native';

import { getMoviesFetch } from '../../api/fetchMovies';
import {
  fetchSavedMoviesFromFirestore,
  saveMovieToUserWatchlist,
  removeMovieFromUserWatchlist,
} from '../../firebase/firebaseUtils';
import {
  addToWatchlist,
  storeMovies,
  storeWatchlist,
  removeFromWatchlist,
} from './actions';
import {
  MoviesActionTypes,
  Response,
  FetchMoviesAction,
  AddToMovieWatchlist,
  RemoveMovieFromWatchlist,
} from './types';

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

function* requestWatchlist(): Generator<CallEffect | PutEffect, void, never> {
  try {
    const data = yield call(fetchSavedMoviesFromFirestore);
    yield put(storeWatchlist(data));
  } catch (error) {
    yield put({ type: MoviesActionTypes.WATCHLIST_FETCH_FAILED });
  }
}

function* saveMovieToWatchlist({
  payload,
}: AddToMovieWatchlist): Generator<CallEffect | PutEffect, void, never> {
  const imdbID = payload;
  try {
    const { data } = yield call(saveMovieToUserWatchlist, imdbID);
    yield put(addToWatchlist(data));
  } catch (error) {
    yield put({ type: MoviesActionTypes.WATCHLIST_FETCH_FAILED });
  }
}

function* deleteMovieFromWatchlist({
  payload,
}: RemoveMovieFromWatchlist): Generator<CallEffect | PutEffect, void, never> {
  const imdbID = payload;
  try {
    const { data } = yield call(removeMovieFromUserWatchlist, imdbID);
    yield put(removeFromWatchlist(data));
  } catch (error) {
    yield put({ type: MoviesActionTypes.WATCHLIST_FETCH_FAILED });
  }
}

function* watcherFetchMovies() {
  yield takeEvery(MoviesActionTypes.MOVIES_FETCH_REQUESTED, requestMovies);
  yield takeEvery(
    MoviesActionTypes.WATCHLIST_FETCH_REQUESTED,
    requestWatchlist,
  );
  yield takeEvery(
    MoviesActionTypes.ADD_MOVIE_TO_WATCHLIST,
    saveMovieToWatchlist,
  );
  yield takeEvery(
    MoviesActionTypes.REMOVE_MOVIE_FROM_WATCHLIST,
    deleteMovieFromWatchlist,
  );
}

export default watcherFetchMovies;
