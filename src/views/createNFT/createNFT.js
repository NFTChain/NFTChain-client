/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UploadNFTForm from './components/UploadNFTForm';
import { connectToContract } from '../../store/actions/contractActions';

const CreateNFT = () => {
  // const createTradeForMintedNFTToken = async (tokenId, price) => {
  //   const approveNFTDexContractForTransfer = await BEP721Contract.approve(
  //     NFTDexJSON.address,
  //     tokenId,
  //   ); // approve the NFTDex contract to be able to transfer the NFT token in the next step

  //   await approveNFTDexContractForTransfer.wait();
  //   debugger;
  //   const trade = await NFTDexContract.openTrade(tokenId, price); // creade trade on NFTDex contract
  //   debugger;
  //   console.log(trade, approveNFTDexContractForTransfer);
  // };

  // if (!BEP20Contract || !BEP721Contract || !signerAddress)
  //   return <h1>Please connect to your wallet to be able to continue</h1>; // metamask hardhat transaction issue (https://hardhat.org/metamask-issue.html)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* {IPFSHashOfUploadedImage && (
        <div style={{ width: '200px', height: '200px' }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={`https://ipfs.io/ipfs/${IPFSHashOfUploadedImage}`}
            alt='NFT'
          />
          <button onClick={setNFTonSale}>Set price</button>
        </div>
      )} */}
      <UploadNFTForm />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    signerAddress: state.contracts.signerAddress,
    BEP20Contract: state.contracts.BEP20Contract,
    BEP721Contract: state.contracts.BEP721Contract,
  };
};

export default connect(mapStateToProps, { connectToContract })(CreateNFT);
