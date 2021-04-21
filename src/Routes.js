import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import CreateNFTView from './views/createNFT/createNFT';
import Marketplace from './views/Marketplace';
import NFTInfoPage from './views/Marketplace/NFTInfoPage';
// Available layouts
import { Main as MainLayout } from './layouts';

// Landingpage component
import { Crypto as CryptoView } from './views/landingPage';

// // Authentication component
// import {
//   Login as LoginView,
//   Signup as SignupView,
//   ForgotPassword as ForgotPasswordView,
// } from './views/authPages';

// Supporting pages
import { NotFound as NotFoundView } from './views/supportingPages';

// Litepaper
import { Litepaper as LitepaperView } from './views/Litepaper';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CryptoView}
            layout={MainLayout}
          />
        )}
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
      /> */}
      <Route
        exact
        path='/marketplace'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={Marketplace}
            layout={MainLayout}
          />
        )}
      />
      <Route
        path='/marketplace/:id'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={NFTInfoPage}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path='/createNFT'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CreateNFTView}
            layout={MainLayout}
          />
        )}
      />
      <Route exact path='/Litepaper' component={LitepaperView} />
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
      <Redirect to='/page-not-found' />
    </Switch>
  );
};

export default Routes;
