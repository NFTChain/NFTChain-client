import * as uiActionTypes from '../actionTypes/uiActionTypes';

const initialState = {
  loading: false,
  isConnected: false,
  error: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActionTypes.START_ACTION:
      return {
        ...state,
        loading: true,
      };
    case uiActionTypes.STOP_ACTION:
      return {
        ...state,
        loading: false,
      };
    case uiActionTypes.SET_CONNECTION:
      return {
        ...state,
        isConnected: action.payload,
      };
    case uiActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
