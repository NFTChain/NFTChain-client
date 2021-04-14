/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import logo from '../../assets/onlyLogo.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import twitter from './twitter.png';
import telegram from './telegram.png';

const Litepaper = () => {
  return (
    <Box style={{ backgroundColor: '#1A2138', color: '#FFFFFF' }}>
      <Box
        className='first-site'
        style={{ width: '100vw', height: '100vh', backgroundColor: '#1A2138' }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            style={{ width: '60%', height: '70%' }}
            src={logo}
            alt='NFTChain logo'
          />
          <Typography
            variant='h2'
            align='center'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            A revolutionary marketplace
          </Typography>
        </Box>
      </Box>
      <Box className='litepaper-text-site'>
        <Box>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFTChain marketplace
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Create NFT's
          </Typography>

          <Typography variant='h5'>
            Nftchain's decentralized marketplace will be capable of turning
            basically every content into a limited or unique NFT. If 3D asset,
            music, image or even video, NFTChain's marketplace will support
            every kind of file!
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Trade NFT's
          </Typography>

          <Typography variant='h5'>
            On the other hand you can buy, sell or bid on all kind of different
            NFT's and enjoy at the same time extremely low transaction fees
            because of the usage of the Binance Smart Chain.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFT Auctions
          </Typography>

          <Typography variant='h5'>
            NFTChain's marketplace will support and highlight high quality NFT
            NFT's auctions where users can buy or bid on special NFT's
          </Typography>
        </Box>
      </Box>
      <Box className='litepaper-text-site'>
        <Box>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFTChain Ecosystem
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFTChain Token
          </Typography>
          <Typography variant='h5'>
            NFTC will be the main currency on the marketplace to be able to buy
            and sell NFT's. Mutliple Blockchain bridges are planned to give
            every user the ability to choose their loved Blockchain. Additionaly
            a FIAT payment integration is planned to give every user the chance
            to buy NFTC without having to buy another cryptocurrency first. To
            attract holding and increase the value of NFTC various staking pools
            and airdrops are planned in the future.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFTCGovernance Token
          </Typography>

          <Typography variant='h5'>
            Nftchain's Goverance token allows holders to help shape the future
            of NFTChain's protocol. Governance token holders can influence
            decisions concerning the project such as proposing or deciding on
            new feature proposals, voting in NFT contests and even changing the
            governance system itself. More will be announced in the future.
          </Typography>
        </Box>
      </Box>
      <Box className='litepaper-text-site'>
        <Box>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            NFTChain's upcoming Features
          </Typography>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Box width={'50%'}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Communication
            </Typography>

            <Typography variant='h5'>
              The marketplace will support communication between authenticated
              users. Artists can communicate with their clients and NFT buyers
              can request a chat to the creator of their loved NFT.
            </Typography>
          </Box>
          <Box width={'50%'}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Staking
            </Typography>

            <Typography variant='h5'>
              To increase the value of NFTChain's main currency NFTC, a staking
              feature is in development.
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Box width={'50%'}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Airdrops
            </Typography>

            <Typography variant='h5'>
              Additionaly to staking, multiple airdrops are planned to attract
              users to hold NFTC.
            </Typography>
          </Box>

          <Box width={'50%'}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              FIAT Gateway
            </Typography>

            <Typography variant='h5'>
              The marketplace will support a FIAT gateway where users can change
              money against NFTC to be able to buy NFT's.
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Box width={'50%'}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              NFT Auctions
            </Typography>

            <Typography variant='h5'>
              NFTC holders will be able to participate in special NFT auctions.
            </Typography>
          </Box>
          <Box width={'50%'}>
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Votings
            </Typography>

            <Typography variant='h5'>
              NFTG holders will be able to vote on future .
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className='litepaper-text-site'
        style={{ justifyContent: 'space-evenly' }}
      >
        <Box>
          <Typography
            variant='h3'
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Join the NFTChain community now
          </Typography>
        </Box>
        <Box style={{ display: 'flex' }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box class='litepaper-channel-container'>
              <Box maxWidth={90}>
                <Box
                  component='img'
                  height={'100%'}
                  width={'100%'}
                  src={twitter}
                  alt='twitter logo'
                />
              </Box>
              <Typography
                variant='h5'
                marginLeft={2}
                marginRight={6}
                sx={{
                  fontWeight: 700,
                }}
              >
                Twitter
              </Typography>
            </Box>
            <Typography
              variant='h7'
              sx={{
                fontWeight: 600,
              }}
            >
              <a href='https://twitter.com/nft_chain'>
                https://twitter.com/nft_chain
              </a>
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box class='litepaper-channel-container'>
              <Box maxWidth={90}>
                <Box
                  component='img'
                  height={'100%'}
                  width={'100%'}
                  src={telegram}
                  alt='telegram logo'
                />
              </Box>
              <Typography
                variant='h5'
                marginLeft={2}
                sx={{
                  fontWeight: 700,
                }}
              >
                Telegram
              </Typography>
            </Box>
            <Typography
              variant='h7'
              sx={{
                fontWeight: 600,
              }}
            >
              <a href='https://t.me/NFT_Chain'>https://t.me/NFT_Chain</a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Litepaper;
