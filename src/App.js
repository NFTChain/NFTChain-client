import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import configureStore from './store/configureStore';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import 'scss/react-images.scss';
import 'scss/slick-slider.scss';

const browserHistory = createBrowserHistory();
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
