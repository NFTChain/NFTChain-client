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
    // <div className='card'>
    //   <div className='card__content'>
    //     <Link
    //       to={`/marketplace/${id}`}
    //       onClick={setNFT}
    //       // className='card__image-box'
    //     >
    //       {/* <div
    //         // style={{ backgroundImage: `url(${image})` }}
    //         className='card__image'
    //         alt='nft card'
    //       > */}
    //       <img className='card__image' src={image} alt='nft card' />
    //       {/* </div> */}
    //     </Link>
    //     <section className='card__info'>
    //       <div className='card__info-row-1'>
    //         <h1 className='card__title'>{title}</h1>
    //         <h4 className='card__description'>{description}</h4>
    //       </div>
    //       <div className='card__info-row-2'>
    //         <p className='card__price'>${price}</p>
    //         <p className='card__artist'>{artist}</p>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <a href='#' className='card'>
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
          <b>Price:</b> ETH 2.00
        </p>
        <p>($3,565.48)</p>
      </div>
      <div className='card__footer'>
        <span className='card__btn card__btn--secondary'>View history</span>
        <span className='card__btn card__btn--primary'>Buy Now</span>
      </div>
    </a>
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
