/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentNFT } from '../../../store/actions/marketplaceActions';
import Blockies from 'react-blockies';

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
  setCurrentNFT,
  howManyOwned,
  isToken,
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
      isToken,
    };
    setCurrentNFT(NFT);
  };

  return (
    <Link to={`/marketplace/${id}`} onClick={setNFT} className='card'>
      <div className='card__body'>
        <div className='card__top'>
          <div className='card__owner'>
            <div className='card__avatar'>
              <Blockies
                seed={
                  owner &&
                  artist &&
                  (owner === artist ? artist : owner).toLowerCase()
                }
                // size={12}
                // scale={6}
                className='holdings_blockie'
              />
            </div>
            <div className='card__user'>
              <span className='card__user__title'>Owned by</span>
              <span className='card__user__code'>
                {owner &&
                  artist &&
                  (owner === artist ? artist : owner).slice(0, 5)}
              </span>
            </div>
          </div>
          <div className='card__creator'>
            <div className='card__avatar'>
              <Blockies
                seed={artist.toLowerCase()}
                // size={12}
                // scale={6}
                className='holdings_blockie'
              />
            </div>
            <div className='card__user'>
              <span className='card__user__title'>Created by</span>
              <span className='card__user__code'>{artist.slice(0, 5)}</span>
            </div>
          </div>
        </div>
        <div className='card__image'>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='card__info'>
        <p>
          <b>Price:</b> NFTC{' '}
          {price.toString().includes('.') ? `${price}0` : price}
        </p>
        <p>(${Math.ceil(price * 0.1)})</p>
      </div>
      <div className='card__footer'>
        <span className='card__btn card__btn--secondary'>
          {howManyOwned // holdings page shows how many nfts you own
            ? `You own ${howManyOwned}`
            : limit && (count || count === 0) // marketplace show how nfts are available
            ? `${limit - count} of ${limit}`
            : null}
        </span>
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
