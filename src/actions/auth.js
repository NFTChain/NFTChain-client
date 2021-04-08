import * as types from './types/auth';

export const login = (user) => ({
  type: types.LOGIN_SUCCESS,
  user,
});
