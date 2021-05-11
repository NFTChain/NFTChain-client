import React from 'react';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import Features from './components/Features';
import Nav from './components/Nav';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div>
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
