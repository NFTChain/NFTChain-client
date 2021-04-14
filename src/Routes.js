import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import CreateNFT from './views/CreateNFT';
import Marketplace from './views/Marketplace';
// Available layouts
import { Main as MainLayout } from './layouts';

// Not found component
import { NotFound as NotFoundView } from './views/NotFound';

// Landingpage component
import { Crypto as CryptoView } from './views/landingPage';

// Authentication component
import {
  LoginSimple as LoginSimpleView,
  SignupSimple as SignupSimpleView,
  ForgotPasswordSimple as ForgotPasswordSimpleView,
} from './views/authPages';

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
      <Route
        exact
        path='/page-login-simple'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={LoginSimpleView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path='/page-signup-simple'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={SignupSimpleView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path='/page-forgot-password-simple'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ForgotPasswordSimpleView}
            layout={MainLayout}
          />
        )}
      />
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
        exact
        path='/createNFT'
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={CreateNFT}
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
