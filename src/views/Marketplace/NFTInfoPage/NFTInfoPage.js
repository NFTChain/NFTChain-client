import React from 'react';
import { Avatar } from '@material-ui/core';
// import Container from '../../../common/Container';
import nftImg from '../../../assets/cardImg.jpeg';

const NFTInfoPage = () => {
  return (
    <div className='nft-container'>
      <div className='spacing'>
        <div className='nft-info'>
          <h3 className='nft-info__title'>River Waves</h3>
          <div className='nft-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fugiat, numquam veritatis neque eligendi quaerat fuga
              nisi odio, optio temporibus, ut aut accusamus incidunt odit qui?
              Minus, natus. Sunt, possimus?
            </p>
          </div>
          <div className='nft-actions'>
            <div className='nft-actions__price'>
              <p className='price'>List price</p>
              <p className='price-amount'>2.400 Ether</p>
            </div>
            <button className='button'>Buy</button>
          </div>
        </div>
        <div className='image-container'>
          <img src={nftImg} alt='nft' />
        </div>
        <div className='nft-users'>
          <div className='nft-user'>
            <Avatar className='nft-user__avatar'></Avatar>
            <div className='nft-user__info'>
              <h4 className='nft-user__name'>Bryan</h4>
              <p className='nft-user__role'>Artist</p>
            </div>
          </div>
          <div className='nft-user'>
            <Avatar className='nft-user__avatar'></Avatar>
            <div className='nft-user__info'>
              <h4 className='nft-user__name'>Stacey</h4>
              <p className='nft-user__role'>Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTInfoPage;
