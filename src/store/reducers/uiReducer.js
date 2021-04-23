import { uiActionTpyes } from 'src/constants/store/actionTypes';
import isEqual from 'lodash.isEqual';

const initialState = {
  loader: {
    actions: [],
    refreshing: [],
  },
};

const uiReducer = (state = initialState, { type, payload }) => {
  const { loader } = state;
  const { actions } = loader;
  switch (type) {
    case uiActionTpyes.START_ACTION:
      return {
        ...state,
        loader: {
          ...loader,
          actions: [...actions, payload.action],
        },
      };
    case uiActionTpyes.STOP_ACTION:
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter((action) => {
            if (action.name !== payload.action.name) {
              return true;
            } else if (!isEqual(action.params, payload.action.params)) {
              return true;
            } else {
              return false;
            }
          }),
        },
      };
    default:
      return state;
  }
};

export default uiReducer;
