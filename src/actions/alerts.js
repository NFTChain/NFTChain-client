import * as types from '../constants/alerts';

export const success = (message) => ({ type: types.SUCCESS, message });
export const error = (message) => ({ type: types.ERROR, message });
export const clear = () => ({ type: types.CLEAR });
