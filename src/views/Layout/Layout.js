import React from 'react';
import Nav from './components/Nav';
import Socials from './components/Socials';
import Footer from './components/Footer';
const Layout = ({ children }) => {
  return (
    <div>
      <Socials />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
