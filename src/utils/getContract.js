import { ethers, Contract } from 'ethers';
import BEP20Token from './NftChainBEP20.json';
import BEP721Token from './NftChainBEP721.json';

export const BEP20ContractString = 'BEP20TokenContract';
export const BEP721ContractString = 'BEP721TokenContract';

const decideWhichContract = (contract) => {
  switch (contract) {
    case BEP20ContractString:
      return BEP20Token;
    case BEP721ContractString:
      return BEP721Token;
  }
};

// we need to fix bugs when people are on the wrong network (not on the bsc testnet / mainnet network)
const getContract = async (contractType, readOnly) => {
  const Token = decideWhichContract(contractType);

  if (window.ethereum) {
    if (readOnly) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log('Provider', provider);

      const token = new Contract(Token.address, Token.abi, provider);
      console.log('Token', token);

      return { token };
    } else {
      await window.ethereum.enable();

      const signer = provider.getSigner();
      console.log('Signer', signer);

      const signerAddress = await signer.getAddress();
      console.log('SignerAddress', signerAddress);

      const token = new Contract(Token.address, Token.abi, signer);
      console.log('Token', token);

      return { signerAddress, token };
    }
  }
};

export default getContract;
