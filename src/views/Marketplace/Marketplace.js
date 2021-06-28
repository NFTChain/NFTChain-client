/* eslint-disable  no-unused-vars */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { utils } from 'ethers';
import { connect } from 'react-redux';
import { getFilesFromIPFS } from '../../utils/getFilesFromIPFS';
import { createNotification } from 'utils/createNotification';
import NFTCardList from './NFTCardList';
import { connectToContract } from '../../store/actions/contractActions';
import {
  startAction,
  stopAction,
  setError,
} from '../../store/actions/uiActions';
import { setAllNFTs } from '../../store/actions/marketplaceActions';
import Loader from 'views/Loader';
// import Pagination from './Pagination';
import { ErrorPage, Button } from 'components';
import ConnectWallet from 'views/ConnectWallet';

const Marketplace = ({
  BEP721Contract,
  allNFTs,
  setAllNFTs,
  loading,
  stopAction,
  startAction,
  setError,
  error,
  isConnected,
}) => {
  const [NFTs, setNFTs] = useState([]);
  const [pinStartDate, setPinStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
  ); // these values are for our query where we get the data from
  const [pinEndDate, setPinEndDate] = useState(new Date().toISOString());
  // const [NFTPerPage] = useState(10);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // only try to get smart contract info if BEP721 contract is available and got updated
    if (isConnected) {
      startAction();
      fetchOnSaleNFTs();
    }
  }, [isConnected]);

  // THIS WHOLE FUNCTION NEEDS A COMPLETE REFACTOR
  // WE NEED TO SPLIT THE DIFFERENT TASKS INTO SUB FUNCTIONS
  // TO AVOID HAVING REPITITION AND AS WELL FOR READABILITY
  const fetchOnSaleNFTs = async () => {
    try {
      // fetch NFTs from IPFS to be able to modify the data how we need it
      let getNFTs = await getFilesFromIPFS(pinStartDate, pinEndDate);

      getNFTs = getNFTs.rows;
      // array where we push matches into
      let NFTInfoArray = [];

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
              debugger;
              NFTInfoArray = await getMintedNFTs(
                NFT,
                NFTInfoObject,
                NFTInfoArray,
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
              key: uuidv4(),
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
              isToken: false, // indicates this is a unminted NFT
            });
          }
        }),
      );
      // when the user presses the load more button we show already the nfts and need to remove duplicates from the existing NFTs we display
      if (NFTs.length > 0) {
        // for (let i = 0, len = NFTs.length; i < len; i++) {
        //   for (let j = 0, len2 = NFTInfoArray.length; j < len2; j++) {
        //     if (NFTs[i].image === NFTInfoArray[j].image) {
        //       NFTInfoArray.splice(j, 1);
        //       len2 = NFTInfoArray.length;
        //     }
        //   }
        // }
        if (NFTInfoArray.length < 1) {
          createNotification(
            'info',
            'No NFTs found for this timeframe, please create an NFT for less than 0.01$ and make the marketplace more full :)',
            5000,
          )();
        }
        NFTInfoArray = NFTInfoArray.concat(NFTs);
      }

      setNFTs(NFTInfoArray);

      setAllNFTs(NFTInfoArray);

      updatePinDates();
    } catch (error) {
      console.log(error);
      debugger;
      // when the user has already some NFTs loaded show just an error message that we reached the limit
      if (NFTs.length > 0) {
        createNotification(
          'error',
          'We reached the limit of getting new NFTs from our IPFS service, this will sometimes happen. Please try in some seconds again and reach out to support if this happens more often.',
          5000,
        )();
      } else {
        setError(
          'Something went wrong getting the art, please refresh the site.',
        );
        createNotification(
          'error',
          'Something went wrong getting the NFTs, please reload the site',
          10000,
        )();
      }
    } finally {
      stopAction();
    }
  };

  const updatePinDates = () => {
    setPinEndDate(pinStartDate);
    const currentDate = new Date(pinStartDate);
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
    setPinStartDate(oneWeekAgo.toISOString());
  };

  const getMintedNFTs = async (NFT, NFTInfoObject, NFTInfoArray) => {
    await Promise.all(
      [...Array(NFTInfoObject.count).keys()].map(async (currentIndex) => {
        // Get the token id
        const tokenId = (
          await BEP721Contract.inkTokenByIndex(NFT.ipfs_pin_hash, currentIndex)
        ).toString();
        debugger;

        // get the owner of the token (NFT)
        const owner = await BEP721Contract.ownerOf(tokenId);
        debugger;
        // because the NFT is already minted - we need to check the tokenPrice and can't use the price from the unminted NFT
        const tokenPrice = (
          await BEP721Contract.tokenPriceByTokenId(tokenId)
        ).toString();
        debugger;

        // if price of token is higher than 0 we want to display it in the marketplace
        if (Number(tokenPrice) > 0) {
          debugger;
          NFTInfoArray.push({
            id: tokenId,
            key: uuidv4(),
            title: NFT.metadata.name,
            image: `https://ipfs.io/ipfs/${NFT.ipfs_pin_hash}`,
            description: NFT.metadata.keyvalues.description,
            fileType: NFT.metadata.keyvalues.fileType,
            price: utils.formatEther(tokenPrice),
            owner: owner,
            artist: NFTInfoObject.artist,
            limit: 1,
            count: 0,
            isToken: true, // indicates this is a minted NFT
          });
        }
      }),
    );
    return NFTInfoArray;
  };

  // const indexOfLastNFT = currentPage * NFTPerPage;
  // const indexOfFirstNFT = indexOfLastNFT - NFTPerPage;
  // const currentNFTS = NFTs.slice(indexOfFirstNFT, indexOfLastNFT);

  if (!isConnected) {
    return <ConnectWallet />;
  } else if (error) {
    return <ErrorPage error={error}></ErrorPage>;
  } else if (loading) {
    return <Loader />;
  }

  return (
    <section className='marketplace'>
      <div className='marketplace__content container'>
        <div className='marketplace__title-box'>
          <h1 className='marketplace__title heading-primary'>Discover</h1>
        </div>

        <div className='marketplace__card-list'>
          <NFTCardList NFTS={NFTs} />
        </div>
      </div>
      {/* <Pagination
        setCurrentPage={setCurrentPage}
        totalNFTS={NFTs.length}
        NFTPerPage={NFTPerPage}
        currentPage={currentPage}
      /> */}
      <div className='marketplace__button-container'>
        <Button
          text='Load more'
          onClick={fetchOnSaleNFTs}
          className='button--blue'
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    allNFTs: state.marketplace.allNFTs,
    loading: state.ui.loading,
    error: state.ui.error,
    isConnected: state.ui.isConnected,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  setAllNFTs,
  stopAction,
  startAction,
  setError,
})(Marketplace);
