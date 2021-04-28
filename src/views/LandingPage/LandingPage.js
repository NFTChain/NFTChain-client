import React from 'react';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import Features from './components/Features';
import Nav from '../Layout/components/Nav';
import Socials from './components/Socials';
import Footer from '../Layout/components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Socials />
      <Nav />
      <Header />
      <Ecosystem />
      <Features />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default LandingPage;
