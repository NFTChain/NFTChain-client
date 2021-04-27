/* eslint  no-unused-vars: 0 */ // --> OFF
/* eslint  no-undef: 0 */ // --> OFF

import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { connectToContract } from '../../../store/actions/contractActions';
import { utils } from 'ethers';
import ConnectWallet from 'views/ConnectWallet';

const NFTInfoPage = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  currentNFT,
  isConnected,
}) => {
  const {
    image,
    title,
    id,
    description,
    price,
    artist,
    owner,
    limit,
    count,
    artistAddress,
  } = currentNFT;

  const [pressedBuy, setPressedBuy] = useState(false);

  const buyNFT = async () => {
    if (BEP20Contract && BEP721Contract && signerAddress) {
      await tryBuyingNFT();
      debugger;
    } else {
      setPressedBuy(true);
    }
  };

  const tryBuyingNFT = async () => {
    try {
      // only for unminted NFT's
      const parsedEtherPrice = utils.parseEther(price);
      const approveBuy = await BEP20Contract.approve(
        BEP721Contract.address,
        parsedEtherPrice,
      );
      await approveBuy.wait();
      const ipfs_hash = image.split('https://ipfs.io/ipfs/')[1];
      const tryToBuy = await BEP721Contract.buyInk(ipfs_hash);
      await tryToBuy.wait();
    } catch (error) {
      debugger;
      console.log(error);
    }
  };

  if (pressedBuy && !isConnected) {
    return <ConnectWallet />;
  }

  return (
    <Box bgcolor='alternate.main' className='nft-container'>
      <Box className='nft-spacing'>
        <div className='nft-info'>
          <h3 className='nft-info__title'>{title}</h3>
          <div className='nft-description'>
            <p>{description}</p>
          </div>
          <div className='nft-actions'>
            <div className='nft-actions__price'>
              <Typography color={'secondary'} className='price'>
                Price
              </Typography>
              <p className='price-amount'>{price} NFTC</p>
            </div>
            <button onClick={buyNFT} className='button'>
              Buy
            </button>
          </div>
        </div>
        <div className='image-container'>
          <img src={image} alt='nft' />
        </div>
        <div className='nft-users'>
          <div className='nft-user'>
            <Avatar className='nft-user__avatar'></Avatar>
            <div className='nft-user__info'>
              <h4 className='nft-user__name'>{artist}</h4>
              <Typography
                color='secondary'
                fontSize={'0.8rem'}
                className='nft-user__role'
              >
                ARTIST
              </Typography>
            </div>
          </div>
          <div className='nft-user'>
            <Avatar className='nft-user__avatar'></Avatar>
            <div className='nft-user__info'>
              <h4 className='nft-user__name'>{owner}</h4>
              <Typography
                color='secondary'
                fontSize={'0.8rem'}
                className='nft-user__role'
              >
                OWNER
              </Typography>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    signerAddress: state.contracts.signerAddress,
    currentNFT: state.marketplace.currentNFT,
    isConnected: state.ui.isConnected,
  };
};

export default connect(mapStateToProps, { connectToContract })(NFTInfoPage);
