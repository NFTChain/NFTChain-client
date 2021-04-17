import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import registerReducer from './reducers/register';
import contractReducer from './reducers/contracts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      registration: registerReducer,
      contracts: contractReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
