import React from 'react';
import { Avatar } from '@material-ui/core';
import Container from '../../../common/Container';
import nftImg from '../../../assets/cardImg.jpeg';

const NFTInfoPage = () => {
  return (
    <Container className='nft-container'>
      <div className='image-container'>
        <img src={nftImg} alt='nft' />
      </div>
      <div className='nft-info'>
        <h3 className='nft-info__title'>River Waves</h3>
        <div className='nft-users'>
          <div className='nft-user'>
            <Avatar className='nft-user__avatar'></Avatar>
            <div className='nft-user__info'>
              <h4>Bryan</h4>
              <p>Artist</p>
            </div>
          </div>
          <div className='nft-user'>
            <div className='nft-user__avatar'>Avatar Image</div>
            <div className='nft-user__info'>
              <h4>Stacey</h4>
              <p>Owner</p>
            </div>
          </div>
        </div>
        <div className='nft-actions'>
          <div className='nft-actions__price'>
            <p>2.400</p>
          </div>
          <button>Buy</button>
        </div>
        <div className='nft-description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            fugiat, numquam veritatis neque eligendi quaerat fuga nisi odio,
            optio temporibus, ut aut accusamus incidunt odit qui? Minus, natus.
            Sunt, possimus?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NFTInfoPage;
