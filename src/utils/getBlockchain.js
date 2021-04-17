import { ethers, Contract } from 'ethers';
import BEP20Token from './NFTC.json';
import BEP721Token from './NFTArt.json';
import NFTDexContract from './NFTDex.json';

const decideContract

const getBlockchain = (contract) =>
  const smartContract = contract === "BEP20Token" ? BEP20Token : contract
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

export default getBlockchain;
