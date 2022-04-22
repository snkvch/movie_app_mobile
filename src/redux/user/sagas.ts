import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import {
  takeLatest,
  put,
  call,
  select,
  CallEffect,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';

import { authModels, authSelectors, authActions } from '.';
import { UserActionTypes, AuthAction, AuthRegisterForm } from './types';

export function* requestLoginEmailPassword(
  props: AuthAction<{ email: string; password: string }>,
): Generator<CallEffect | PutEffect, void, never> {
  const email = props.payload?.email;
  const password = props.payload?.password;

  try {
    if (email && password) {
      const userCredentials: FirebaseAuthTypes.UserCredential = yield call(
        authModels.loginWithEmailPassword,
        email,
        password,
      );
      yield put(authActions.Login(userCredentials.user));
    }
  } catch (err) {
    yield put(authActions.AuthError(err as Error));
  }
}

export function* requestOnGoogleSignIn(): Generator<
  SelectEffect | CallEffect | PutEffect,
  void,
  never
> {
  try {
    yield call(authModels.onGoogleSignIn);
    yield put(authActions.GoogleSignInSuccess());
  } catch {
    Alert.alert('Something went wrong');
  }
}

export function* requestLogout(): Generator<
  SelectEffect | CallEffect | PutEffect,
  void,
  never
> {
  try {
    const isLogged = yield select(authSelectors.isLogged);
    if (isLogged) {
      yield call(authModels.logout);
    }
    yield put(authActions.Logout());
  } catch {
    Alert.alert('Something went wrong');
  }
}

export function* requestRegisterEmailPassword(
  props: AuthAction<AuthRegisterForm>,
): Generator<CallEffect | PutEffect, void, never> {
  const email = props.payload?.email;
  const password = props.payload?.password;

  try {
    if (email && password) {
      yield call(authModels.registerEmailPassword, email, password);
      yield put(authActions.RegisterSuccess());
    }
  } catch (err) {
    Alert.alert('Something went wrong');
    yield put(authActions.AuthError(err as Error));
  }
}

export default [
  takeLatest(
    UserActionTypes.REQUEST_LOGIN_EMAIL_PASSWORD,
    requestLoginEmailPassword,
  ),
  takeLatest(UserActionTypes.REQUEST_LOGOUT, requestLogout),
  takeLatest(
    UserActionTypes.REQUEST_REGISTER_EMAIL_PASSWORD,
    requestRegisterEmailPassword,
  ),
  takeLatest(UserActionTypes.REQUEST_ON_GOOGLE_SIGN_IN, requestOnGoogleSignIn),
];
