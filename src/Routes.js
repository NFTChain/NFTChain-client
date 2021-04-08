import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import { Main as MainLayout } from './layouts';

// Landing pages
import { Crypto as CryptoView } from './views/landingPages';
import Dashboard from './views/dashboard/Dashboard';

// Authentication pages
import {
  LoginSimple as LoginSimpleView,
  SignupSimple as SignupSimpleView,
  ForgotPasswordSimple as ForgotPasswordSimpleView,
} from './views/authPages';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
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
        path="/page-login-simple"
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
        path="/page-signup-simple"
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
        path="/page-forgot-password-simple"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ForgotPasswordSimpleView}
            layout={MainLayout}
          />
        )}
      />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/page-not-found" />
    </Switch>
  );
};

export default Routes;
