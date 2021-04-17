import * as types from '../actionTypes/contractActionTypes';
import {
  BEP20Contract,
  BEP721Contract,
  NFTDexContract,
} from '../../utils/getContract';

const initialState = {
  signerAddress: undefined,
  BEP20TokenContract: undefined,
  BEP721TokenContract: undefined,
  NFTDexContract: undefined,
  isLoading: false,
};

const decideContract = (payload) => {
  const result = { signerAddress: payload.signerAddress };
  switch (payload.contract) {
    case BEP20Contract:
      result.BEP20Contract = action.payload.token;
      break;
    case BEP721Contract:
      result.BEP721Contract = action.payload.token;
      break;
    case NFTDexContract:
      result.NFTDexContract = action.payload.token;
      break;
  }
  return result;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTRACT:
      return { ...state, ...decideContract(action.payload) };
    default:
      return state;
  }
};
