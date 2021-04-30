import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
