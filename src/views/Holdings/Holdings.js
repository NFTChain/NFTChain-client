/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { BEP721ContractString } from '../../utils/getContract';

const Holdings = ({ BEP721Contract, connectToContract, signerAddress }) => {
  useEffect(() => {
    connectToContract(BEP721ContractString);
  }, []);
  const getHoldings = async () => {
    const amountOfCreatedNFTs = Number(
      (await BEP721Contract.inksCreatedBy(signerAddress)).toString(),
    );

    const holdings = Promise.all(
      new Array(amountOfCreatedNFTs).map(async (item, index) => {
        const idOfcreatedNFT = Number(
          await BEP721Contract.inkOfArtistByIndex(signerAddress, 0),
        ).toString();

        const NFTInfo = await BEP721Contract.inkInfoById(idOfcreatedNFT);

        const NFTInfoObject = {
          artist: NFTInfo[0].toString(),
          count: NFTInfo[1].toString(),
          ipfs_hash: NFTInfo[2].toString(),
          price: NFTInfo[3].toString(),
          // add later limit here to be able to know how much got sold
        };
      }),
    );
  };
  return (
    <div>
      <button onClick={getHoldings}>click</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    signerAddress: state.contracts.signerAddress,
    BEP721Contract: state.contracts.BEP721Contract,
  };
};

export default connect(mapStateToProps, { connectToContract })(Holdings);
