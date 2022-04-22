import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export enum UserActionTypes {
  LOGIN = 'LOGIN',
  REQUEST_LOGIN_EMAIL_PASSWORD = 'REQUEST_LOGIN_EMAIL_PASSWORD',
  REQUEST_ON_GOOGLE_SIGN_IN = 'REQUEST_ON_GOOGLE_SIGN_IN',
  GOOGLE_SIGN_IN_SUCCESS = 'GOOGLE_SIGN_IN_SUCCESS',
  LOGOUT = 'LOGOUT',
  AUTH_ERROR = 'AUTH_ERROR',
  REQUEST_LOGOUT = 'REQUEST_LOGOUT',
  REQUEST_REGISTER_EMAIL_PASSWORD = 'REQUEST_REGISTER_EMAIL_PASSWORD',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
}

export interface UserState {
  isLogged: boolean;
  isLoading: boolean;
  currentUser?: FirebaseAuthTypes.User;
  error?: Error;
}

export type AuthAction<Payload> = {
  type: UserActionTypes;
  payload: Payload;
};

export type AuthReducer = (
  state: UserState,
  actions: AuthAction<UserState>,
) => UserState;

export interface AuthLoginForm {
  email: string;
  password: string;
}

export interface AuthRegisterForm {
  email: string;
  password: string;
}

export interface Logout {
  type: UserActionTypes.LOGOUT;
}

export interface RequestLogout {
  type: UserActionTypes.REQUEST_LOGOUT;
}

export interface Login {
  type: UserActionTypes.LOGIN;
  payload: { currentUser: FirebaseAuthTypes.User };
}

export interface GoogleSignInSuccess {
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS;
}

export interface RequestLoginEmailPassword {
  type: UserActionTypes.REQUEST_LOGIN_EMAIL_PASSWORD;
  payload: AuthLoginForm;
}

export interface RequestOnGoogleSignIn {
  type: UserActionTypes.REQUEST_ON_GOOGLE_SIGN_IN;
}

export interface RequestRegisterEmailPassword {
  type: UserActionTypes.REQUEST_REGISTER_EMAIL_PASSWORD;
  payload: AuthRegisterForm;
}

export interface RegisterSuccess {
  type: UserActionTypes.REGISTER_SUCCESS;
}

export interface AuthError {
  type: UserActionTypes.AUTH_ERROR;
  payload: Error;
}

export type ActionTypes =
  | Logout
  | RequestLogout
  | Login
  | GoogleSignInSuccess
  | RequestLoginEmailPassword
  | RequestOnGoogleSignIn
  | RequestRegisterEmailPassword
  | RegisterSuccess
  | AuthError;
