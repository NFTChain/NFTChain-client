/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentNFT } from '../../../store/actions/marketplaceActions';

const NFTCard = ({
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
  setCurrentNFT,
}) => {
  const setNFT = () => {
    const NFT = {
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
    };
    setCurrentNFT(NFT);
  };

  return (
    <Link to={`/marketplace/${id}`} onClick={setNFT} className='card'>
      <div className='card__body'>
        <div className='card__top'>
          <div className='card__owner'>
            <div className='card__avatar'></div>
            <div className='card__user'>
              <span className='card__user__title'>Owned by</span>
              <span className='card__user__code'>2304RC</span>
            </div>
          </div>
          <div className='card__creator'>
            <div className='card__avatar'></div>
            <div className='card__user'>
              <span className='card__user__title'>Created by</span>
              <span className='card__user__code'>20AR02</span>
            </div>
          </div>
        </div>
        <div className='card__image'>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='card__info'>
        <p>
          <b>Price:</b> NFTC {price}0
        </p>
        <p>($3,565.48)</p>
      </div>
      <div className='card__footer'>
        <span className='card__btn card__btn--secondary'>View history</span>
        <span className='card__btn card__btn--primary'>Buy Now</span>
      </div>
    </Link>
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

export default connect(mapStateToProps, { setCurrentNFT })(NFTCard);
