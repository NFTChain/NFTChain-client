import React from 'react';
import Header from './components/Header';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import Features from './components/Features';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Ecosystem />
      <Features />
      <Roadmap />
    </div>
  );
};

export default LandingPage;
