import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import registerReducer from './reducers/register';
import contractReducer from './reducers/contractsReducer';
import marketplaceReducer from './reducers/marketplaceReducer';
import uiReducer from './reducers/uiReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      registration: registerReducer,
      contracts: contractReducer,
      ui: uiReducer,
      marketplace: marketplaceReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );

  return store;
};
