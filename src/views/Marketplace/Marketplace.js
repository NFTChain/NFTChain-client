/* eslint-disable  no-unused-vars */
import React, { useState, useEffect } from 'react';
import NFTCardList from './NFTCardList';
import Pagination from './Pagination';
import { getFilesFromIPFS } from '../../utils/getFilesFromIPFS';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import {
  startAction,
  stopAction,
  setError,
} from '../../store/actions/uiActions';
import { setAllNFTs } from '../../store/actions/marketplaceActions';
import { BEP721ContractString } from '../../utils/getContract';
import { utils } from 'ethers';
import Loader from 'views/Loader';
import Filters from './Filters';
import { createNotification } from 'utils/createNotification';
import { H1 } from 'components';

const Marketplace = ({
  BEP721Contract,
  connectToContract,
  allNFTs,
  setAllNFTs,
  loading,
  stopAction,
  startAction,
  setError,
  error,
}) => {
  const [NFTs, setNFTs] = useState([]);
  const [NFTPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // only try to get smart contract info if BEP721 contract is available and got updated
    if (BEP721Contract) {
      startAction();
      fetchOnSaleNFTs();
    } else {
      startAction();
      connectToContract(BEP721ContractString, true); // true for readOnly contract, because we dont need the signer
    }
  }, [BEP721Contract]);

  // THIS WHOLE FUNCTION NEEDS A COMPLETE REFACTOR
  // WE NEED TO SPLIT THE DIFFERENT TASKS INTO SUB FUNCTIONS
  // TO AVOID HAVING REPITITION AND AS WELL FOR READABILITY
  const fetchOnSaleNFTs = async () => {
    try {
      // fetch NFTs from IPFS to be able to modify the data how we need it
      let getNFTs = await getFilesFromIPFS();
      getNFTs = getNFTs.rows;
      // array where we push matches into
      const NFTInfoArray = [];

      // Promise.all because we have a list of promises
      await Promise.all(
        getNFTs.map(async (NFT) => {
          let NFTInfoPromise, NFTInfoObject, owner;

          try {
            // get info of ink
            NFTInfoPromise = await BEP721Contract.inkInfoByInkUrl(
              NFT.ipfs_pin_hash,
            );

            NFTInfoObject = {
              id: NFTInfoPromise[0].toString(),
              artist: NFTInfoPromise[1].toString(),
              count: NFTInfoPromise[2].toString(),
              price: utils.formatEther(NFTInfoPromise[3].toString()),
              limit: NFTInfoPromise[4].toString(),
            };

            // if the count is higher than 0 we know a user already bought a token
            // we need to check who bought the token and if the user already put it on sale
            // if its on sale we need to display it on the marketplace
            if (NFTInfoObject.count > 0) {
              await [...Array(NFTInfoObject.count).keys()].map(
                async (currentIndex) => {
                  // Get the token id
                  const tokenId = (
                    await BEP721Contract.inkTokenByIndex(
                      NFT.ipfs_pin_hash,
                      currentIndex,
                    )
                  ).toString();

                  // get the owner of the token (NFT)
                  owner = await BEP721Contract.ownerOf(tokenId);

                  // because the NFT is already minted - we need to check the tokenPrice and can't use the price from the unminted NFT
                  const tokenPrice = (
                    await BEP721Contract.tokenPriceByTokenId(tokenId)
                  ).toString();

                  // if price of token is higher than 0 we want to display it in the marketplace
                  if (Number(tokenPrice) > 0) {
                    NFTInfoArray.push({
                      id: NFTInfoObject.id,
                      title: NFT.metadata.name,
                      image: `https://ipfs.io/ipfs/${NFT.ipfs_pin_hash}`,
                      description: NFT.metadata.keyvalues.description,
                      fileType: NFT.metadata.keyvalues.fileType,
                      price: utils.formatEther(tokenPrice),
                      owner: owner,
                      artist: NFTInfoObject.artist,
                      limit: 1,
                      count: 0,
                    });
                  }
                },
              );
            }
          } catch (error) {
            debugger;
          }
          if (
            NFTInfoPromise &&
            NFTInfoObject &&
            Number(NFTInfoObject.price) > 0 &&
            NFTInfoObject.count !== NFTInfoObject.limit
          ) {
            // if NFTInfo is defined, the NFT (minted or unminted) exists, if price is set (higher than 0) we want to display the NFT on the marketplace
            NFTInfoArray.push({
              id: NFTInfoObject.id,
              title: NFT.metadata.name,
              image: `https://ipfs.io/ipfs/${NFT.ipfs_pin_hash}`,
              description: NFT.metadata.keyvalues.description,
              fileType: NFT.metadata.keyvalues.fileType,
              price: NFTInfoObject.price,
              owner: NFTInfoObject.artist,
              // artistAddress: NFTInfoObject.artist,
              // NFTisMinted: owner === NFT.metadata.keyvalues.artist, // owner is artist (catch block logic) when there is no owner of the the NFTs id
              artist: NFTInfoObject.artist,
              // artist: NFT.metadata.keyvalues.artist,
              limit: NFTInfoObject.limit,
              count: NFTInfoObject.count,
            });
          }
        }),
      );
      setNFTs(NFTInfoArray);
      setAllNFTs(NFTInfoArray);
    } catch (error) {
      console.log(error);
      debugger;
      setError(
        'Something went wrong getting the art, please refresh the site.',
      );
      createNotification(
        'error',
        'Something went wrong getting the NFTs, please reload the site',
        10000,
      )();
    } finally {
      stopAction();
    }
  };

  const indexOfLastNFT = currentPage * NFTPerPage;
  const indexOfFirstNFT = indexOfLastNFT - NFTPerPage;
  const currentNFTS = NFTs.slice(indexOfFirstNFT, indexOfLastNFT);

  if (loading) return <Loader />;
  else if (error) return <H1 text={error} />; // lets create an something went wrong screen for such cases

  return (
    <section className='marketplace'>
      <div className='marketplace__content container'>
        <div className='marketplace__title-box'>
          <h1 className='marketplace__title'>Discover</h1>
        </div>
        <Filters />

        <div className='marketplace__card-list'>
          <NFTCardList NFTS={currentNFTS} />
        </div>
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalNFTS={NFTs.length}
        NFTPerPage={NFTPerPage}
        currentPage={currentPage}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    allNFTs: state.marketplace.allNFTs,
    loading: state.ui.loading,
    error: state.ui.error,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  setAllNFTs,
  stopAction,
  startAction,
  setError,
})(Marketplace);
