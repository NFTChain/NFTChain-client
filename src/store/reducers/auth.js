import * as types from '../actionTypes/auth';

let user = localStorage.getItem('user');
const defaultAuthState = user ? { loggedIn: true, user } : {};

export default (state = defaultAuthState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case types.LOGIN_FAILURE:
      return {
        message: action.error,
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
