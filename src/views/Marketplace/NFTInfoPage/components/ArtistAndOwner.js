import React from 'react';
import Text from 'components/Text';
import { H6 } from 'components/Headings';
import Blockies from 'react-blockies';

const ArtistAndOwner = ({ artist, owner }) => {
  return (
    <div className='artist-and-owner'>
      <div className='artist-and-owner__card'>
        <div className='artist-and-owner__avatar'>
          {' '}
          <Blockies
            seed={owner && owner.toLowerCase()}
            className='holdings_blockie'
          />
        </div>
        <div className='artist-and-owner__info'>
          <Text text='Owner' />
          <H6 text={owner && owner.slice(0, 6)} />
        </div>
      </div>

      <div className='artist-and-owner__card'>
        <div className='artist-and-owner__avatar'>
          <Blockies
            seed={artist && artist.toLowerCase()}
            className='holdings_blockie'
          />
        </div>
        <div className='artist-and-owner__info'>
          <Text text='Artist' />
          <H6
            style={{ color: '#434343' }}
            text={artist && artist.slice(0, 6)}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistAndOwner;
