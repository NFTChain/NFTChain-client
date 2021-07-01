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
  // BEP20Contract,
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

  // const sendMassToken = (index, array, amount) => {
  //   amount = utils.parseEther(amount);
  //   BEP20Contract.transfer(array[index], amount);
  //   if (index !== array.length) {
  //     setTimeout(() => {
  //       sendMassToken(index + 1, array, '123');
  //     }, 5000);
  //   }
  // };

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
        {/* <Button
          text='send'
          onClick={() =>
            sendMassToken(
              0,
              [
                '0xCF030628E90A346EDc8bd092c68673900cC457da',
                '0x170F7E6C476277036cC70EF791B4643CDCc3b84B',
                '0xd77612E5e732DB06E0E0cb1e1c585e1baFcB00Ac',
                '0xC019cA4B47C10811F0a63a878C678B9d8863832e',
                '0x610d57A24125Ec8eD64918a2Dc2809dDFD13D11C',
                '0x81Ffaa75b411660628115c07ce696033179e1296',
                '0x76bDA052854CAf34B431144AdcB50532d127904d',
                '0x7CF0A266139734D257d015BCED2E7e2bE6F418AB',
                '0x241E7C465e15006bC977daA53c8E9A52422da838',
                '0xEfb2FF1A684f906e29802b7ee405C9e77c004A30',
                '0x5A8FA79585732396E17713db711744F3D61ef3ff',
                '0x5A8FA79585732396E17713db711744F3D61ef3ff',
                '0xD1d524bc73f83c33D89f1386CDd1d21117C27ead',
                '0xdc7F67cDBdc999B06817c81C9ac8b4b50bf1EB4d',
                '0xCe2f7B616312b86D373110f1fa3d4195BD254F51',
                '0x84daAF3FD047AD6B6ebA771cba20F2bF7b1B9e41',
                '0x45a6CC0367c3B7C00f4289A94613dB997bDa4A27',
                '0x583C473770Ec628384488C2Ce16aC0A537b80147',
                '0x6EF2bBb2661CfAd66FB2B2776d249276Cbd1Fd94',
                '0xD1Eb4dF40381ea7f0AFbCDBc4c36A314546cf076',
                '0xBA9f9D4dB6570767fC86f01cDf45460818d38cc8',
                '0x94A725E10c90D8A114cD5De17C7b94De57B721cE',
                '0x56BbB1F51c926cdb70fe184D1B88AA51670ea12c',
                '0x9bE60b78EBBBD97253e95FAe2b54190D716d998F',
                '0xb9dC0659914D8feE88Bde2a5ad69A25B959aCe87',
                '0xFefAD28A6015e52C60757E5f47E8b5e210A704cD',
                '0x205a8DEa85780FA6c3Af148F6ee704e861B37A63',
                '0xb9c5Ca63FE129B1a89F36e6BA464A71d9c4E1a66',
                '0x065523F2833b759daA98830536CAf0dEb698646E',
                '0x6e7aF2E8a6DAB90DF5732a44C77492b4F4ac4260',
                '0x124C443d0d6B94A877F891e508E1d69bb0e2015d',
                '0x7c343d0482890aa92CfBA7ca7AB1729D9b0f5920',
                '0xbB47a735d42E7112FbAD32A13097015430985d9C',
                '0x678f06ADF8e9721063AE2888288a28DDAB100bdE',
                '0xd078D4bD079F47424C9f8bc921D85f43697e360c',
              ],
              '123',
            )
          }
          className='button--blue'
        /> */}
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
