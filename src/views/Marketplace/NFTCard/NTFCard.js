/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
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
    <Link
      to={`/marketplace/${id}`}
      onClick={setNFT}
      className='card-img__wrapper'
    >
      <section className='Cards'>
        <div className='product_card'>
          <img src={image} className='product_image' alt='PRODUCT' />
          <section>
            <h1 className='title'>Vintage Classic Camera</h1>
            <span className='price'>$70</span>
            <strike>$90</strike>
            <span className='discount'>20% OFF</span>
            <p className='rating'>
              <span className='fa fa-star checked'></span>
              <span className='fa fa-star checked'></span>
              <span className='fa fa-star checked'></span>
              <span className='fa fa-star'></span>
              <span className='fa fa-star'></span>
            </p>
          </section>
        </div>
      </section>
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

/* // <Box bgcolor='background.default' className='card'>
    //   <Link to={linkConfig} className='card-img__wrapper'>
    //     <img className='card-img' src={image} alt='digital art' />
    //   </Link>
    //   <div className='card-info'>
    //     <h3>{title}</h3>
    //     <p>{description}</p>
    //     <div className='card-info__actions'>
    //       <button className='button'>Buy</button>
    //       <p>Price: {price}</p>
    //     </div>
    //     <div className='card-info__separate'></div>
    //     <div className='card-info__creators'>
    //       <div className='card-info__creator'>
    //         <p className='card-info__title'>Artist</p>
    //         <p className='card-info__name'>User: {artist}</p>
    //       </div>
    //       <div className='card-info__creator'>
    //         <p className='card-info__title'>Owner</p>
    //         <p className='card-info__name'>User: {owner}</p>
    //       </div>
    //     </div>
    //   </div>
    // </Box> */
