import * as types from '../actions/types';

export const loginUser = (data) => ({
  type: types.LOGIN_USER,
  data,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

export const restoreSession = (token) => ({
  type: types.RESTORE_SESSION,
  token,
});
export const setLoggedInUser = (data) => ({
  type: types.SET_LOGGED_IN_USER,
  data,
});

export const enableLoader = (value) => ({
  type: types.ENABLE_LOADER,
});
export const disableLoader = (value) => ({
  type: types.DISABLE_LOADER,
});