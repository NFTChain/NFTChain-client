/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { connectToContract } from '../../store/actions/contractActions';
import { startAction, stopAction } from '../../store/actions/uiActions';
import Loader from '../Loader';
import { utils } from 'ethers';
import { createNotification } from 'utils/createNotification';
import NFTCard from 'views/Marketplace/NFTCard';
import ConnectWallet from 'views/ConnectWallet';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';

const Holdings = ({
  BEP721Contract,
  signerAddress,
  loading,
  startAction,
  stopAction,
  isConnected,
}) => {
  const [unmintedHoldings, setUnmintedHoldings] = useState([]);
  const [mintedHoldings, setMintedHoldings] = useState([]);

  useEffect(() => {
    if (isConnected) {
      // if contracts are loaded and try to get holdings
      getHoldings();
    }
  }, [isConnected]);

  const getHoldings = async () => {
    startAction();

    try {
      const amountOfCreatedNFTsPromise = BEP721Contract.inksCreatedBy(
        signerAddress,
      ); // from this promise we don't know if the NFT is mint or unminted

      const amountOfMintedNFTsPromise = BEP721Contract.balanceOf(signerAddress); // from this promise we know already that the NFT is minted

      let [amountOfCreatedNFTs, amountOfMintedNFTs] = await Promise.all([
        amountOfCreatedNFTsPromise,
        amountOfMintedNFTsPromise,
      ]);

      amountOfCreatedNFTs = Number(amountOfCreatedNFTs.toString());
      amountOfMintedNFTs = Number(amountOfMintedNFTs.toString());

      if (amountOfCreatedNFTs > 0 && amountOfMintedNFTs > 0) {
        // if from booth category are some available => use Promise.all for performance reasons

        const unsoldUnmintedNFTsPromise = getUnsoldUnmintedNFTs(
          amountOfCreatedNFTs,
        );
        const boughtOrMintedNFTsPromise = getBoughtOrMintedNFTs(
          amountOfMintedNFTs,
        );

        const [boughtOrMintedNFTS, unsoldUnmintedNFTs] = await Promise.all([
          boughtOrMintedNFTsPromise,
          unsoldUnmintedNFTsPromise,
        ]);

        setUnmintedHoldings(unsoldUnmintedNFTs);
        setMintedHoldings(boughtOrMintedNFTS);
      } else if (amountOfCreatedNFTs > 0 && amountOfMintedNFTs === 0) {
        // if only from one category are some availble => try to get the holdings from that one category
        const unsoldUnmintedNFTs = await getUnsoldUnmintedNFTs(
          amountOfCreatedNFTs,
        );

        setUnmintedHoldings(unsoldUnmintedNFTs);
      } else if (amountOfCreatedNFTs === 0 && amountOfMintedNFTs > 0) {
        // if only from one category are some availble => try to get the holdings from that one category
        const boughtOrMintedNFTS = await getBoughtOrMintedNFTs(
          amountOfMintedNFTs,
        );
        setMintedHoldings(boughtOrMintedNFTS);
      }
    } catch (error) {
      debugger;
      console.log(error);
      createNotification(
        'error',
        'Something went wrong loading your NFTs, please reach out to support.',
        5000,
      );
    } finally {
      stopAction();
    }
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
            currentPrice: utils.formatEther(NFTInfoObject.price),
            howManyOwned: NFTInfoObject.limit - NFTInfoObject.count,
            key: uuidv4(),
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
    await Promise.all(
      [...Array(amountOfMintedNFTs).keys()].map(async (currentIndex) => {
        const tokenId = await BEP721Contract.tokenOfOwnerByIndex(
          signerAddress,
          currentIndex,
        );
        const NFTUrl = await BEP721Contract.tokenURI(tokenId);
        // after this promise we can already check NFTInfoArray if we added a NFT with the same ipfs-hash and just add 1 to key "howManyOwned"

        const doesNFTAlreadyExists = NFTInfoArray.some(
          (item) => item.image === NFTUrl,
        );

        if (!doesNFTAlreadyExists) {
          const ipfsHash = NFTUrl.split('https://ipfs.io/ipfs/')[1];

          // if NFT doesnt exist push the new NFT into the array
          const NFTInfoPromise = await BEP721Contract.inkInfoByInkUrl(ipfsHash);

          const NFTInfoObject = {
            id: NFTInfoPromise[0].toString(),
            artist: NFTInfoPromise[1].toString(),
            count: NFTInfoPromise[2].toString(),
            price: utils.formatEther(NFTInfoPromise[3].toString()),
            limit: NFTInfoPromise[4].toString(),
          };

          // because the NFT is already minted - we need to check the tokenPrice and can't use the price from the unminted NFT
          const tokenPrice = (
            await BEP721Contract.tokenPriceByTokenId(tokenId)
          ).toString();

          NFTInfoArray.push({
            id: NFTInfoObject.id,
            image: NFTUrl,
            currentPrice: tokenPrice,
            howManyOwned: 1,
            key: uuidv4(),
          });
        } else {
          // else increase the count of key "howManyOwned"
          NFTInfoArray.find((item) => item.image === NFTUrl).howManyOwned += 1;
        }
      }),
    );

    if (NFTInfoArray.length > 0) {
      return NFTInfoArray;
    } else {
      return [];
    }
  };

  const setPriceOfUnmintedNFT = () => {};

  const setPriceOfMintedNFT = () => {};

  if (!isConnected) {
    return <ConnectWallet />;
  } else if (loading) {
    return <Loader />;
  }
  // add logic when user has 0 nfts
  return (
    <div className='holdings'>
      {unmintedHoldings.length > 0 && (
        <div className='card-list'>
          <div className='marketplace__title' style={{ margin: 0 }}>
            <h1 className='marketplace__title' style={{ margin: 0 }}>
              Unminted Holdings
            </h1>
          </div>
          <div className='card__list' style={{ margin: 0 }}>
            {unmintedHoldings.map((item) => {
              return (
                <div className='single__card' key={item.key}>
                  <NFTCard
                    key={item.key}
                    image={item.image}
                    price={item.currentPrice}
                  />
                  <Button
                    onClick={setPriceOfUnmintedNFT}
                    variant='contained'
                    color='primary'
                  >
                    Change price
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {mintedHoldings.length > 0 && (
        <div>
          <div className='marketplace__title'>
            <h1 className='marketplace__title'>Minted Holdings</h1>
          </div>
          <div className='card__list'>
            {mintedHoldings.map((item) => {
              return (
                <div className='single__card' key={item.key}>
                  <NFTCard image={item.image} price={item.currentPrice} />
                  <Button
                    onClick={setPriceOfMintedNFT}
                    variant='contained'
                    color='primary'
                  >
                    {Number(item.currentPrice) > 0
                      ? 'Change Price'
                      : 'Set Price'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    signerAddress: state.contracts.signerAddress,
    BEP721Contract: state.contracts.BEP721Contract,
    loading: state.ui.loading,
    isConnected: state.ui.isConnected,
  };
};

export default connect(mapStateToProps, {
  connectToContract,
  startAction,
  stopAction,
})(Holdings);
