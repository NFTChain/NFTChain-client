import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import configureStore from './store/configureStore';

import 'react-lazy-load-image-component/src/effects/blur.css';

import './scss/styles.scss';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
