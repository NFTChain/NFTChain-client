import * as types from '../actionTypes/contractActionTypes';
import {
  BEP20ContractString,
  BEP721ContractString,
} from '../../utils/getContract';

const initialState = {
  signerAddress: false,
  BEP20Contract: false,
  BEP721Contract: false,
  BEP20Balance: false,
  BEP721Balance: false,
};

const decideWhichContract = (payload) => {
  const result = {
    ...(payload.signerAddress && { signerAddress: payload.signerAddress }),
  };
  switch (payload.contractType) {
    case BEP20ContractString:
      result.BEP20Contract = payload.token;
      break;
    case BEP721ContractString:
      result.BEP721Contract = payload.token;
      break;
  }
  return result;
};

const decideWhichBalance = (payload) => {
  const result = {};
  switch (payload.contractType) {
    case BEP20ContractString:
      result.BEP20Balance = payload.balance;
      break;
    case BEP721ContractString:
      result.BEP721Balance = payload.balance;
      break;
  }
  return result;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTRACT:
      return { ...state, ...decideWhichContract(action.payload) };
    case types.GET_CONTRACT_BALANCE:
      return { ...state, ...decideWhichBalance(action.payload) };
    default:
      return state;
  }
};
