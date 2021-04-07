import * as types from './types/register';

export const register = (user) => ({
  type: types.REGISTER_REQUEST,
  user,
});
