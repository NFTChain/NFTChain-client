import { ethers, Contract } from 'ethers';
import BEP20Token from './NFTC.json';
import BEP721Token from './NFTArt.json';
import NFTDexContract from './NFTDex.json';

export const BEP20Contract = 'BEP20TokenContract';
export const BEP721Contract = 'BEP721TokenContract';
export const NFTDexContract = 'NFTDexContract';

const decideContract = (contract) => {
  switch (contract) {
    case BEP20Contract:
      return BEP20Token;
    case BEP721Contract:
      return BEP721Token;
    case NFTDexContract:
      return NFTDexToken;
  }
};

const getContract = (contract) => {
  const Token = decideContract(contract);
  new Promise((resolve) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();
        const token = new Contract(Token.address, Token.abi, signer);

        resolve({ signerAddress, token });
      }
      resolve({ signerAddress: undefined, token: undefined });
    });
  });
};

export default getContract;
