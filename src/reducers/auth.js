import * as types from '../actions/types/auth';

const defaultAuthState = {
  user: {},
};

export default (state = defaultAuthState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case types.SIGNUP:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
