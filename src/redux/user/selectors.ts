import { RootState } from '../store';

import { UserState } from './types';

const getState = (state: RootState): UserState => state.user;
const getUserId = (state: RootState): string =>
  state.user.currentUser?.uid || '';
const isLogged = (state: RootState): boolean => state.user.isLogged;
const isLoading = (state: RootState): boolean => state.user.isLoading;

export { getState, getUserId, isLogged, isLoading };
