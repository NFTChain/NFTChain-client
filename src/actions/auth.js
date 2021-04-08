import axios from 'axios';
import * as types from '../constants/auth';
import { history } from '../helpers/history';

const url = 'http://localhost:5000';

export const login = (user) => (dispatch) => {
  const request = (user) => ({ type: types.LOGIN_REQUEST, user });
  const success = (user) => ({ type: types.LOGIN_SUCCESS, user });
  const failure = (error) => ({ type: types.LOGIN_FAILURE, error });

  dispatch(request(user));

  axios
    .post(`${url}/user/login`, user)
    .then((res) => {
      dispatch(success(res.data));
      localStorage.setItem('user', res.data.token);
      history.push('/');
      window.location.reload();
    })
    .catch((err) => {
      dispatch(failure(err.response.data.message));
    });
};

export const logout = () => (dispatch) => {
  dispatch(logout());
  localStorage.removeItem('user');

  return { type: types.LOGOUT };
};
