import * as uiActionTypes from '../actionTypes/uiActions';

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
