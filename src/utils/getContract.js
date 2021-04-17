import { ethers, Contract } from 'ethers';
import BEP20Token from './NFTC.json';
import BEP721Token from './NFTArt.json';
import NFTDexContract from './NFTDex.json';

export const BEP20ContractString = 'BEP20TokenContract';
export const BEP721ContractString = 'BEP721TokenContract';
export const NFTDexContractString = 'NFTDexContract';

const decideContract = (contract) => {
  console.log('DECIDECONTRACT', contract);
  switch (contract) {
    case BEP20ContractString:
      return BEP20Token;
    case BEP721ContractString:
      return BEP721Token;
    case NFTDexContractString:
      return NFTDexContract;
  }
};

const getContract = (contract) => {
  const Token = decideContract(contract);
  console.log('DECIDED =>', Token);
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
