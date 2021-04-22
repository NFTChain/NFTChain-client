import React from 'react';
import Nav from './components/Nav';
import Socials from './components/Socials';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';
import Features from './components/Features';

const LandingPage = () => {
  return (
    <div>
      <Socials />
      <Nav />
      <Header />
      <Ecosystem />
      <Features />
    </div>
  );
};

export default LandingPage;
