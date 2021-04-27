import * as uiActionTypes from '../actionTypes/uiActionTypes';

const initialState = {
  loading: false,
  isConnected: false,
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
    default:
      return state;
  }
};

export default uiReducer;
