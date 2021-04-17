import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import registerReducer from './reducers/register';
import contractReducer from './reducers/contracts';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      registration: registerReducer,
      contracts: contractReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );

  return store;
};
