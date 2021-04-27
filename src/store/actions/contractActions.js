import * as actionTypes from '../actionTypes/contractActionTypes';
import getContract from 'utils/getContract';
import {
  BEP20ContractString,
  BEP721ContractString,
} from '../../utils/getContract';
import { utils } from 'ethers';

export const connectToContract = (contractType, readOnly = false) => async (
  dispatch,
) => {
  try {
    // get the smart contract to be able to communicate with the blockchain
    const { signerAddress, token } = await getContract(contractType, readOnly);
    dispatch({
      type: actionTypes.GET_CONTRACT,
      payload: {
        contractType,
        signerAddress,
        token,
      },
    });
    // If BEP20 or ERC721 token & signerAddress => get the balance from users wallet
    if (
      (BEP20ContractString === contractType ||
        BEP721ContractString === contractType) &&
      signerAddress
    ) {
      return dispatch(getContractBalance(contractType, token, signerAddress));
    }
  } catch (error) {
    debugger;
    console.log(error);
    // dispatch error message here
  }
};

export const getContractBalance = (
  contractType,
  contract,
  signerAddress,
) => async (dispatch) => {
  // get users balance of tokens
  try {
    let balance = (await contract.balanceOf(signerAddress)).toString();
    if (BEP20ContractString === contractType)
      // only for BEP20 token because BEP721 doesnt have decimals
      balance = utils.formatEther(balance); // "ether" is 18 decimals like our BEP20 token
    dispatch({
      type: actionTypes.GET_CONTRACT_BALANCE,
      payload: {
        contractType,
        balance,
      },
    });
  } catch (error) {
    console.log(error);
    debugger;
    // dispatch error message here
  }
};
