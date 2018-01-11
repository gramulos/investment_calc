import { combineReducers } from 'redux';
import stocksReducer from './stocksReducer';
import localStorageReducer from './localStorageReducer';
import cryptoReducer from './cryptoReducer';

export default combineReducers({
  stocks: stocksReducer,
  local: localStorageReducer,
  crypto: cryptoReducer,
});
