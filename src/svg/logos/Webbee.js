import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/onlyLogo.jpg';
const Webbee = ({ width = 45, height = 70 }) => {
  return <img style={{ width, height }} src={logo} alt='logo'></img>;
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
