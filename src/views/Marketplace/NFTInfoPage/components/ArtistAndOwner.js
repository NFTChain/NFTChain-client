import React from 'react';

const ArtistAndOwner = () => {
  return (
    <div className='artist-and-owner'>
      <div className='artist-and-owner__container'>
        <div className='artist-and-owner__card'>
          <div className='artist-and-owner__avatar' />
          <div className='artist-and-owner__user'>
            <span className='artist-and-owner__title'>Owned by</span>
            <span className='artist-and-owner__code'>2304RC</span>
          </div>
        </div>
      </div>
      <div className='artist-and-owner__container'>
        <div className='artist-and-owner__card'>
          <div className='artist-and-owner__avatar' />
          <div className='artist-and-owner__user'>
            <span className='artist-and-owner__title'>Owned by</span>
            <span className='artist-and-owner__code'>2304RC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistAndOwner;
