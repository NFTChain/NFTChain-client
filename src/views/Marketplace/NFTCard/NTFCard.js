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
    <div className='card'>
      <div className='card__content'>
        <Link
          to={`/marketplace/${id}`}
          onClick={setNFT}
          className='card__image-box'
        >
          <div
            style={{ backgroundImage: `url(${image})` }}
            className='card__image'
            alt='nft card'
          />
        </Link>
        <section className='card__info'>
          <div className='card__info-row-1'>
            <h1 className='card__title'>{title}</h1>
            <h4 className='card__description'>{description}</h4>
          </div>
          <div className='card__info-row-2'>
            <p className='card__price'>${price}</p>
            <p className='card__artist'>{artist}</p>
          </div>
        </section>
      </div>
    </div>
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
