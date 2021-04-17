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

const getContract = async (contract) => {
  const Token = decideContract(contract);

  if (window.ethereum) {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log('Provider', provider);
    const signer = provider.getSigner();
    console.log('Signer', signer);
    const signerAddress = await signer.getAddress();
    console.log('SignerAddress', signerAddress);
    const token = new Contract(Token.address, Token.abi, signer);
    console.log('Token', token);
    console.log(signerAddress, token);
    return { signerAddress, token };
  }
};

export default getContract;
