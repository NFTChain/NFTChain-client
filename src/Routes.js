import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Holdings from './views/Holdings/Holdings';
import Marketplace from './views/Marketplace';
import NFTInfoPage from './views/Marketplace/NFTInfoPage';
import LandingPage from './views/LandingPage-2';
import CreateNFT from './views/CreateNFT/CreateNFT';
import { Litepaper } from './views/Litepaper';

// // Authentication component
// import {
//   Login as LoginView,
//   Signup as SignupView,
//   ForgotPassword as ForgotPasswordView,
// } from './views/authPages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/createNFT' component={CreateNFT}></Route>
      <Route exact path='/marketplace' component={Marketplace}></Route>
      <Route exact path='/' component={Holdings}></Route>
      <Route exact path='/Litepaper' component={Litepaper} />
      <Route path='/marketplace/:id' component={NFTInfoPage} />
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
