import * as types from '../actionTypes/contractActionTypes';
import {
  BEP20ContractString,
  BEP721ContractString,
  NFTDexContractString,
} from '../../utils/getContract';

const initialState = {
  signerAddress: false,
  BEP20Contract: undefined,
  BEP721Contract: undefined,
  NFTDexContract: undefined,
  isLoading: false,
};

const decideContract = (payload) => {
  const result = { signerAddress: payload.signerAddress };
  switch (payload.contract) {
    case BEP20ContractString:
      result.BEP20Contract = payload.token;
      break;
    case BEP721ContractString:
      result.BEP721Contract = payload.token;
      break;
    case NFTDexContractString:
      result.NFTDexContract = payload.token;
      break;
  }
  console.log('decide result', result);
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
