/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { BEP721ContractString } from '../../utils/getContract';

const Holdings = ({ BEP721Contract, connectToContract, signerAddress }) => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    if (BEP721Contract) {
      getHoldings();
    } else {
      connectToContract(BEP721ContractString);
    }
  }, [BEP721Contract]);

  const getHoldings = async () => {
    const amountOfCreatedNFTs = Number(
      (await BEP721Contract.inksCreatedBy(signerAddress)).toString(),
    );
    // if user created NFTs
    if (amountOfCreatedNFTs) {
      const unsoldNFTs = await getUnsoldNFTs(amountOfCreatedNFTs); // unsold NFTs are as well unminted NFTs
      setHoldings(unsoldNFTs);
    }
    const yeah = holdings;
    debugger;
  };

  const getUnsoldNFTs = async (amountOfCreatedNFTs) => {
    const NFTInfoArray = [];

    await Promise.all(
      [...Array(amountOfCreatedNFTs).keys()].map(async (currentIndex) => {
        const idOfcreatedNFT = Number(
          await BEP721Contract.inkOfArtistByIndex(signerAddress, currentIndex),
        ).toString();

        const NFTInfoPromise = await BEP721Contract.inkInfoById(idOfcreatedNFT);

        const NFTInfoObject = {
          artist: NFTInfoPromise[0].toString(),
          count: Number(NFTInfoPromise[1].toString()),
          ipfs_hash: NFTInfoPromise[2].toString(),
          price: NFTInfoPromise[3].toString(),
          limit: Number(NFTInfoPromise[4].toString()),
        };
        if (NFTInfoObject.limit !== NFTInfoObject.count) {
          // if not all created unminted NFTs sold display it as holding
          NFTInfoArray.push({
            id: idOfcreatedNFT,
            image: `https://ipfs.io/ipfs/${NFTInfoObject.ipfs_hash}`,
            price: NFTInfoObject.price,
            howManyLeft: NFTInfoObject.limit - NFTInfoObject.count,
          });
        }
      }),
    );

    if (NFTInfoArray.length > 0) {
      return NFTInfoArray;
    } else {
      return [];
    }
  };

  const getHoldings = async () => {
    const amountOfCreatedNFTs = Number(
      (await BEP721Contract.inksCreatedBy(signerAddress)).toString(),
    );
    // if user created NFTs
    if (amountOfCreatedNFTs) {
      const unsoldNFTs = await getUnsoldNFTs(amountOfCreatedNFTs); // unsold NFTs are as well unminted NFTs
      setHoldings(unsoldNFTs);
    }
    const yeah = holdings;
    debugger;
  };

  const getBoughtdOrMintedNFTs = async (amountOfCreatedNFTs) => {
    const NFTInfoArray = [];
    // need to find a way to get bought or minted coins
  };

  if (!BEP721Contract) return <div>You need to connect to your wallet</div>;

  return <div>{holdings.length > 0 && <h1>{holdings[0].image}</h1>}</div>;
};
const mapStateToProps = (state) => {
  return {
    signerAddress: state.contracts.signerAddress,
    BEP721Contract: state.contracts.BEP721Contract,
  };
};

export default connect(mapStateToProps, { connectToContract })(Holdings);
