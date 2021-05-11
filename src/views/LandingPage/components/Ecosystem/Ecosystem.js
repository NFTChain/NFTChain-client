import React from 'react';
import binance from '../../../../assets/binance.png';
import ethereum from '../../../../assets/ethereum.png';
import polkadot from '../../../../assets/polkadot.png';
import pancake from '../../../../assets/pancake.png';
import uniswap from '../../../../assets/uniswap.png';

const Ecosystem = () => {
  return (
    <section className='ecosystem'>
      <div className='ecosystem__content container'>
        <div className='ecosystem__box'>
          <img src={binance} alt='binance logo' className='ecosystem__logo' />
        </div>
        <div className='ecosystem__box'>
          <img src={polkadot} alt='binance logo' className='ecosystem__logo' />
        </div>
        <div className='ecosystem__box'>
          <img src={pancake} alt='binance logo' className='ecosystem__logo' />
        </div>
        <div className='ecosystem__box'>
          <img src={uniswap} alt='binance logo' className='ecosystem__logo' />
        </div>
        <div className='ecosystem__box'>
          <img src={ethereum} alt='binance logo' className='ecosystem__logo' />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
