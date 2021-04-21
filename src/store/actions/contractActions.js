import * as actionTypes from '../actionTypes/contractActionTypes';
import getContract from 'utils/getContract';
import {
  BEP20ContractString,
  BEP721ContractString,
} from '../../utils/getContract';

export const connectToContract = (contractType) => async (dispatch) => {
  // get the smart contract to be able to communicate with the blockchain
  const { signerAddress, token } = await getContract(contractType);
  dispatch({
    type: actionTypes.GET_CONTRACT,
    payload: {
      contractType,
      signerAddress,
      token,
    },
  });
  // If BEP20 or ERC721 token => get the balance from users wallet
  if (
    BEP20ContractString === contractType ||
    BEP721ContractString === contractType
  ) {
    return dispatch(getContractBalance(contractType, token, signerAddress));
  }
};

export const getContractBalance = (
  contractType,
  contract,
  signerAddress,
) => async (dispatch) => {
  // get users balance of tokens
  let balance = (await contract.balanceOf(signerAddress)).toString();

  dispatch({
    type: actionTypes.GET_CONTRACT_BALANCE,
    payload: {
      contractType,
      balance,
    },
  });
};
