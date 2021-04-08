import axios from 'axios';
import * as types from '../constants/register';
import { history } from '../helpers/history';

const url = 'http://localhost:5000';

export const register = (user) => (dispatch) => {
  const request = (user) => ({ type: types.REGISTER_REQUEST, user });
  const success = (user) => ({ type: types.REGISTER_SUCCESS, user });
  const failure = (error) => ({ type: types.REGISTER_FAILURE, error });

  dispatch(request(user));

  axios
    .post(`${url}/user/register`, user)
    .then(() => {
      dispatch(success());
      history.push('/page-login-simple');
      window.location.reload();
    })
    .catch((err) => {
      dispatch(failure(err.response.data.message));
    });
};
