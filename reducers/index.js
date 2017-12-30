import { combineReducers } from 'redux';
import stocksReducer from './stocksReducer';
import localStorageReducer from './localStorageReducer';

export default combineReducers({
  stocks: stocksReducer,
  local: localStorageReducer,
});
