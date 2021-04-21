import React from 'react';
import Nav from './components/Nav';
import Socials from './components/Socials';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';

const LandingPage = () => {
  return (
    <div>
      <Socials />
      <Nav />
      <Header />
      <Ecosystem />
    </div>
  );
};

export default LandingPage;
