import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
// import MenuIcon from '@material-ui/icons/Menu';
import { history } from '../../../../store/helpers/history';
import Search from '../../../../views/Marketplace/Search';
import WebbeeLogo from 'svg/logos/Webbee';

const Topbar = ({ themeMode, themeToggler }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      width={'100%'}
    >
      {/* <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label='Menu'>
            <MenuIcon />
          </IconButton>
        </Box> */}
      <Box
        display={'flex'}
        alignItems='baseline'
        component='a'
        underline='none'
        href='/'
        title='webbee'
        height={{ xs: 32, md: 36 }}
        width={50}
      >
        <WebbeeLogo height={'100%'} width={'100%'} />
      </Box>
      {history.location.pathname == '/marketplace' && (
        <Box width={'30rem'}>
          <Search />
        </Box>
      )}
      {/* <Box paddingLeft={'2rem'}>
          <Link color='text.primary' href={'/marketplace'}>
            Marketplace
          </Link>
        </Box>
        <Box paddingLeft={'2rem'}>
          <Link color='text.primary' href={'/'}>
            My items
          </Link>
        </Box>
        <Box paddingLeft={'2rem'}>
          <Link color='text.primary' href={'/'}>
            Activity
          </Link>
        </Box> */}

      {/* <Box paddingLeft={'2rem'}>
          <Link color='text.primary' href={'/login'}>
            Log in
          </Link>
        </Box>

        <Box paddingLeft={'2rem'}>
          <Link color='text.primary' href={'/login'}>
            Sign up
          </Link>
        </Box> */}
      <Box paddingLeft={'2rem'} className='nav-button'>
        <Link color='text.primary' href={'https://twitter.com/nft_chain'}>
          Twitter
        </Link>
      </Box>
      <Box paddingLeft={'2rem'} className='nav-button'>
        <Link color='text.primary' href={'https://t.me/NFT_Chain'}>
          Telegram
        </Link>
      </Box>
      <Box paddingLeft={'1rem'}>
        <IconButton
          onClick={() => themeToggler()}
          aria-label='Dark mode toggler'
          color={themeMode === 'light' ? 'primary' : 'secondary'}
        >
          {themeMode === 'light' ? (
            <svg
              width={24}
              height={24}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          ) : (
            <svg
              width={24}
              height={24}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
