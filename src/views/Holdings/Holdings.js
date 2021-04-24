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
    const amountOfCreatedNFTsPromise = BEP721Contract.inksCreatedBy(
      signerAddress,
    ); // from this promise we don't know if the NFT is mint or unminted
    const amountOfMintedNFTsPromise = BEP721Contract.balanceOf(signerAddress); // from this promise we know already that the NFT is minted

    let [amountOfCreatedNFTs, amountOfMintedNFTs] = Promise.all(
      amountOfCreatedNFTsPromise,
      amountOfMintedNFTsPromise,
    );

    amountOfCreatedNFTs = Number(amountOfCreatedNFTs.toString());
    amountOfMintedNFTs = Number(amountOfMintedNFTs.toString());
    debugger;

    if (amountOfCreatedNFTs > 0 && amountOfMintedNFTs > 0) {
      // if from booth category are some available => use Promise.all for performance reasons
      const unsoldUnmintedNFTsPromise = getUnsoldUnmintedNFTs(
        amountOfCreatedNFTs,
      );
      const boughtOrMintedNFTsPromise = getBoughtOrMintedNFTs(
        amountOfMintedNFTs,
      );

      const [unsoldUnmintedNFTs, boughtOrMintedNFTS] = Promise.all(
        unsoldUnmintedNFTsPromise,
        boughtOrMintedNFTsPromise,
      );

      setHoldings(unsoldUnmintedNFTs.concat(boughtOrMintedNFTS));
    } else if (amountOfCreatedNFTs > 0 && amountOfMintedNFTs < 1) {
      // if only from one category are some availble => try to get the holdings from that one category
      const unsoldUnmintedNFTs = await getUnsoldUnmintedNFTs(
        amountOfCreatedNFTs,
      );
      setHoldings(unsoldUnmintedNFTs);
    } else if (amountOfCreatedNFTs < 1 && amountOfMintedNFTs > 0) {
      // if only from one category are some availble => try to get the holdings from that one category
      const boughtOrMintedNFTS = await getBoughtOrMintedNFTs(
        amountOfMintedNFTs,
      );
      setHoldings(boughtOrMintedNFTS);
    }
    const yeah = holdings;
    debugger;
  };

  const getUnsoldUnmintedNFTs = async (amountOfCreatedNFTs) => {
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
          // if not all created unminted NFTs sold => display it as holding
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

  const getBoughtOrMintedNFTs = async (amountOfMintedNFTs) => {
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
