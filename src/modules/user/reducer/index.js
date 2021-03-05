import * as types from "../actions/types";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: '',
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case types.ENABLE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    
    case types.DISABLE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    case types.SET_LOGGED_IN_USER:
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
        token: action.data.access_token,
      };
    
    case types.LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        token: '',
      };

    default:
      return state;
  }
};
