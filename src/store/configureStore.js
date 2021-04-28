import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import registerReducer from './reducers/register';
import contractReducer from './reducers/contractsReducer';
import marketplaceReducer from './reducers/marketplaceReducer';
import uiReducer from './reducers/uiReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export default () => {
  const persistedState = loadFromLocalStorage();

  const store = createStore(
    combineReducers({
      auth: authReducer,
      registration: registerReducer,
      contracts: contractReducer,
      ui: uiReducer,
      marketplace: marketplaceReducer,
    }),
    persistedState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );

  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
};
