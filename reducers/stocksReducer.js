import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export default createReducer({}, {
  [types.SEARCH_ITEM_IN_STOCK_REQUEST](state) {
    return Object.assign({}, state, { isSearching: true });
  },
  [types.SEARCH_ITEM_IN_STOCK_SUCCESS](state, { searchResult }) {
    const newState = Object.assign({}, state, { searchResult });
    delete newState.isSearching;
    return newState;
  },
  [types.SEARCH_ITEM_IN_STOCK_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isSearching;
    return newState;
  },
  [types.GET_ITEM_RATES_REQUEST](state) {
    return Object.assign({}, state, { isLoadingDailyRates: true });
  },
  [types.GET_ITEM_RATES_SUCCESS](state, { itemRates }) {
    const newState = Object.assign({}, state, { itemRates });
    delete newState.isLoadingDailyRates;
    return newState;
  },
  [types.GET_ITEM_RATES_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isLoadingDailyRates;
    return newState;
  },
  [types.GET_ITEM_RATES_HISTORY_REQUEST](state) {
    return Object.assign({}, state, { isLoadingRateHistory: true });
  },
  [types.GET_ITEM_RATES_HISTORY_SUCCESS](state, { itemRatesHistory }) {
    const newState = Object.assign({}, state, { itemRatesHistory });
    delete newState.isLoadingRateHistory;
    return newState;
  },
  [types.GET_ITEM_RATES_HISTORY_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isLoadingRateHistory;
    return newState;
  },
});
