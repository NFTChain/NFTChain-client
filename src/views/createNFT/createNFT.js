/* eslint  no-unused-vars: 0 */ // --> OFF
/* eslint  no-constant-condition: 0 */ // --> OFF

import React from 'react';
import { connect } from 'react-redux';
import UploadNFTForm from './components/UploadNFTForm';
import { connectToContract } from '../../store/actions/contractActions';

import Loader from '../Loader';
const CreateNFT = () => {
  if (false) return <Loader />;
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
