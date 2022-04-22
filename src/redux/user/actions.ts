import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserActionTypes } from './types';

export const Logout = () =>
  ({
    type: UserActionTypes.LOGOUT,
  } as const);

export const RequestLogout = () =>
  ({
    type: UserActionTypes.REQUEST_LOGOUT,
  } as const);

export const Login = (currentUser: FirebaseAuthTypes.User) =>
  ({
    type: UserActionTypes.LOGIN,
    payload: { currentUser },
  } as const);

export const GoogleSignInSuccess = () =>
  ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  } as const);

export const RequestLoginEmailPassword = (email: string, password: string) =>
  ({
    type: UserActionTypes.REQUEST_LOGIN_EMAIL_PASSWORD,
    payload: { email, password },
  } as const);

export const RequestOnGoogleSignIn = () =>
  ({
    type: UserActionTypes.REQUEST_ON_GOOGLE_SIGN_IN,
  } as const);

export const RequestRegisterEmailPassword = (email: string, password: string) =>
  ({
    type: UserActionTypes.REQUEST_REGISTER_EMAIL_PASSWORD,
    payload: { email, password },
  } as const);

export const RegisterSuccess = () =>
  ({
    type: UserActionTypes.REGISTER_SUCCESS,
  } as const);

export const AuthError = (error: Error) => ({
  type: UserActionTypes.AUTH_ERROR,
  payload: { error },
});
