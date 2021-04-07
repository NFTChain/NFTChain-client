import { ethers, Contract } from 'ethers';
import Token from './SimpleCollectible.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAdress = await signer.getAddress();
        const token = new Contract(Token.address, Token.abi, signer);

        resolve({ signerAdress, token });
      }
      resolve({ signerAdress: undefined, token: undefined });
    });
  });

export default getBlockchain;
