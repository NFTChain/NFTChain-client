/* eslint  no-unused-vars: 0 */ // --> OFF
import React, { useState, useEffect } from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import nftImg from '../../../assets/cardImg.jpeg';
import { connect } from 'react-redux';
import { connectToContract } from '../../../store/actions/contractActions';
import {
  BEP721ContractString,
  BEP20ContractString,
} from '../../../utils/getContract';

const NFTInfoPage = (props) => {
  debugger;
  // useEffect(() => {
  //   if (BEP721Contract) {
  //     // getNFTInfo();
  //   } else {
  //     [BEP20ContractString, BEP721ContractString].forEach((contractString) =>
  //       connectToContract(contractString),
  //     );
  //   }
  // }, [BEP721Contract]);

  // if (!NFT) return <div>LOADING SIR</div>;
  return (
    <Box bgcolor='alternate.main' className='nft-container'>
      <Box className='nft-spacing'>
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
              <Typography color={'secondary'} className='price'>
                List price
              </Typography>
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
              <h4 className='nft-user__name'>Stacey</h4>
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
  };
};

export default connect(mapStateToProps, { connectToContract })(NFTInfoPage);
