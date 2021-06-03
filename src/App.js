import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import configureStore from './store/configureStore';
import { NotificationContainer } from 'react-notifications';
import TemperaryError from './components/TemperaryError';

import 'react-notifications/lib/notifications.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const store = configureStore();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
    };
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 800;

    if (isMobile) {
      return <TemperaryError />;
    } else {
      return (
        <Provider store={store}>
          <Router basename={process.env.PUBLIC_URL}>
            <Routes />
            <NotificationContainer />
          </Router>
        </Provider>
      );
    }
  }
}

export default App;
