import axios from 'axios';
import * as types from './types/auth';
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
      alert('login success');
    })
    .catch((err) => {
      dispatch(failure(err));
      alert('login failed');
    });
};

export const logout = () => (dispatch) => {
  dispatch(logout());
  localStorage.removeItem('user');

  return { type: types.LOGOUT };
};
