import React from 'react';

const ArtistAndOwner = ({ artist, owner }) => {
  return (
    <div className='artist-and-owner'>
      <div className='artist-and-owner__container'>
        <div className='artist-and-owner__card'>
          <div className='artist-and-owner__avatar' />
          <div className='artist-and-owner__user'>
            <span className='artist-and-owner__title'>Owner</span>
            <span className='artist-and-owner__code'>{owner.slice(0.4)}</span>
          </div>
        </div>
      </div>
      <div className='artist-and-owner__container'>
        <div className='artist-and-owner__card'>
          <div className='artist-and-owner__avatar' />
          <div className='artist-and-owner__user'>
            <span className='artist-and-owner__title'>Artist</span>
            <span className='artist-and-owner__code'>{artist.slice(0, 4)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistAndOwner;
