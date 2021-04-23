import { uiActionTpyes } from 'src/constants/store/actionTypes';

const initialState = {
  loading: false,
};

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case uiActionTpyes.START_ACTION:
      return {
        ...state,
        loading: true,
      };
    case uiActionTpyes.STOP_ACTION:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
