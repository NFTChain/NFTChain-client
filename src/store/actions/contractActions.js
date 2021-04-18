import * as actionTypes from '../actionTypes/contractActionTypes';
import { getContract, getBalance } from 'utils/getContract';
import { BEP20ContractString } from '../../utils/getContract';

export const connectToContract = (contractType) => async (dispatch) => {
  // get the smart contract to be able to communicate with the blockchain
  const { signerAddress, token } = await getContract(contractType);
  debugger;
  dispatch({
    type: actionTypes.GET_CONTRACT,
    payload: {
      contractType,
      signerAddress,
      token,
    },
  });
  // If BEP20 or ERC721 token => get the balance from users wallet
  if (BEP20ContractString === contractType) {
    return dispatch(getContractBalance(contractType));
  }
};

export const getContractBalance = (contractType) => async (dispatch) => {
  // get users balance of tokens
  const balance = await getBalance(contractType);
  debugger;

  dispatch({
    type: actionTypes.GET_CONTRACT_BALANCE,
    payload: {
      contractType,
      balance,
    },
  });
};
