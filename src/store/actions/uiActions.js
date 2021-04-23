import * as types from '../actionTypes/uiActions';

export const startAction = (name, params) => ({
  type: uiActionTypes.START_ACTION,
  payload: {
    action: { name, params },
  },
});

export const stopAction = (name, params) => ({
  type: uiActionTypes.STOP_ACTION,
  payload: {
    action: { name, params },
  },
});

export const refreshActionStart = (refreshAction) => ({
  type: uiActionTypes.REFRESH_ACTION_START,
  payload: { refreshAction },
});

export const refreshActionStop = (refreshAction) => ({
  type: uiActionTypes.REFRESH_ACTION_STOP,
  payload: { refreshAction },
});
