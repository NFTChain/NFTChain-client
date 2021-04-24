import * as uiActionTypes from '../actionTypes/uiActionTypes';

const initialState = {
  loading: false,
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
    default:
      return state;
  }
};

export default uiReducer;
