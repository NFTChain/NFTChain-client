import * as types from './types/auth';

export const login = (user) => ({
  type: types.LOGIN,
  user,
});

export const signup = (user) => ({
  type: types.SIGNUP,
  user,
});
