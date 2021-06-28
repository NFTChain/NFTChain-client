/* eslint  react/no-children-prop: 0 */ // --> OFF
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Holdings from './views/Holdings';
import Marketplace from './views/Marketplace';
import NFTInfoPage from './views/Marketplace/NFTInfoPage';
import CreateNFT from './views/CreateNFT';
import PaintingFactory from './views/PaintingFactory';
// import LandingPage from './views/LandingPage';
// import Litepaper from './views/Litepaper';

import Layout from './views/Layout';

// // Authentication component
// import {
//   Login as LoginView,
//   Signup as SignupView,
//   ForgotPassword as ForgotPasswordView,
// } from './views/authPages';

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path='/' component={LandingPage} /> */}
      <Route
        path={'/createNFT'}
        render={() => <Layout children={<CreateNFT />} />}
      />
      <Route
        exact
        path='/marketplace'
        render={() => <Layout children={<Marketplace />} />}
      />
      <Route
        path='/holdings'
        render={() => <Layout children={<Holdings />} />}
      />
      {/* <Route
        path='/Litepaper'
        render={() => <Layout children={<Litepaper />} />}
      /> */}
      <Route
        path='/marketplace/:id'
        render={() => <Layout children={<NFTInfoPage />} />}
      />
      <Route
        exact
        path='/'
        render={() => <Layout children={<PaintingFactory />} />}
      />
      {/* <Route
        exact
        path='/login'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={LoginView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path='/signup'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={SignupView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path='/forgot-password'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ForgotPasswordView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path='/page-not-found'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to='/page-not-found' /> */}
    </Switch>
  );
};

export default Routes;
