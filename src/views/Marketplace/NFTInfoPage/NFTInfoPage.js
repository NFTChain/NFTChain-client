/* eslint  no-unused-vars: 0 */ // --> OFF
/* eslint  no-undef: 0 */ // --> OFF

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { connectToContract } from '../../../store/actions/contractActions';
import {
  BEP721ContractString,
  BEP20ContractString,
} from '../../../utils/getContract';
import { utils } from 'ethers';

const NFTInfoPage = ({
  BEP20Contract,
  BEP721Contract,
  signerAddress,
  connectToContract,
  currentNFT,
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

  const buyNFT = async () => {
    if (BEP20Contract && BEP721Contract && signerAddress) {
      await tryBuyingNFT();
      debugger;
    } else {
      connectToSmartContracts();
      alert('You need to connect your wallet first');
    }
  };

  const connectToSmartContracts = () => {
    [BEP20ContractString, BEP721ContractString].forEach((contractString) =>
      connectToContract(contractString),
    );
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
  return (
    <section className='info'>
      <div className='info__content container'>
        <div className='info__box'>
          <div className='info__row info__row-1'>
            <h2 className='info__title'>{title}</h2>
            <p className='info__description'>{description}</p>
          </div>
          <div className='info__purchase-box'>
            <p className='info__price'>{price} NFTC</p>
            <button className='btn btn--white'>Purchase</button>
          </div>
        </div>
        <div className='info__image-box'>
          <img src={image} alt='nft' className='info__image' />
        </div>
        <div className='info__users-box'>
          <div className='info__user-box'>
            <Avatar />
            <div className='info__user__details'>
              <h3 className='info__user__details-name'>{artist}</h3>
              <h4 className='info__user__details-role'>Artist</h4>
            </div>
          </div>
          <div className='info__user-box'>
            <Avatar />
            <div className='info__user__details'>
              <h3 className='info__user__details-name'>{owner}</h3>
              <h4 className='info__user__details-role'>Owner</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    BEP721Contract: state.contracts.BEP721Contract,
    BEP20Contract: state.contracts.BEP20Contract,
    signerAddress: state.contracts.signerAddress,
    currentNFT: state.marketplace.currentNFT,
  };
};

export default connect(mapStateToProps, { connectToContract })(NFTInfoPage);
