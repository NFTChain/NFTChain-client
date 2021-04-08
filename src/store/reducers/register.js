import * as types from '../actionTypes/register';

export default (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { registering: true };
    case types.REGISTER_SUCCESS:
      return {};
    case types.REGISTER_FAILURE:
      return {
        message: action.error,
      };
    default:
      return state;
  }
};
