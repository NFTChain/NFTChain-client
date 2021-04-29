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
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 120,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 2,
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
            their files into unique NFT&apos;s. We support songs, videos, images
            and even 3D assets. Join us on our mission to make NFT&apos;s
            mainstream!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
