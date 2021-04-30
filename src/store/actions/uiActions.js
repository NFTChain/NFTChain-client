import * as uiActionTypes from '../actionTypes/uiActionTypes';

export const startAction = () => ({
  type: uiActionTypes.START_ACTION,
});

export const stopAction = () => ({
  type: uiActionTypes.STOP_ACTION,
});

export const setConnection = (isConnected) => ({
  type: uiActionTypes.SET_CONNECTION,
  payload: isConnected,
});

export const setError = (message) => ({
  type: uiActionTypes.SET_ERROR,
  payload: message,
});
