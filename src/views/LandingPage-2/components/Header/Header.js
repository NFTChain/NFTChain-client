import React from 'react';
import Particles from 'react-particles-js'; // docs: https://github.com/matteobruni/tsparticles/tree/main/components/react
const Header = () => {
  return (
    <header className='header'>
      <div
        className='header__content container'
        style={{ position: 'relative' }}
      >
        <Particles
          style={{ position: 'absolute' }}
          params={{
            particles: {
              number: {
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              color: {
                value: '#FFFFFF', // color of poits
              },
              collisions: {
                enable: true,
              },
              links: {
                // styling for the lines / connections
                color: '#FFFFFF',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
        <div className='header__text-box'>
          <h1 className='heading-primary heading-primary-1'>NFTChain</h1>
          <h1 className='heading-primary heading-primary-2'>
            A revolutionary marketplace
          </h1>
          <p className='heading-primary-main'>
            NFTChain is a decentralized network for collectors who can turn
            their files into a unique NFT&apos;s. We support songs, videos,
            images and even 3D assets. Join us on our mission to make NFT&apos;s
            mainstream!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
