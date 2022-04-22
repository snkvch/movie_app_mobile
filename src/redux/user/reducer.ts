import { Login } from './actions';
import { UserState, UserActionTypes, ActionTypes } from './types';

const initialState: UserState = {
  isLogged: false,
  isLoading: false,
  currentUser: undefined,
  error: undefined,
};

const userReducer = (state = initialState, action: ActionTypes): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGOUT: {
      return {
        ...state,
        isLogged: false,
        isLoading: false,
        currentUser: undefined,
        error: undefined,
      };
    }
    case UserActionTypes.LOGIN: {
      const { payload } = action as ReturnType<typeof Login>;
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        currentUser: payload.currentUser,
      };
    }
    case UserActionTypes.REQUEST_ON_GOOGLE_SIGN_IN: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    }
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        isLoading: false,
      };
    }
    case UserActionTypes.REQUEST_LOGIN_EMAIL_PASSWORD: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    }
    case UserActionTypes.REQUEST_REGISTER_EMAIL_PASSWORD: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    }
    case UserActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        error: undefined,
      };
    }
    case UserActionTypes.AUTH_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
