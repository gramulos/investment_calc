import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export default createReducer({}, {
  [types.GET_CRYPTO_LIST_REQUEST](state) {
    return Object.assign({}, state, { isLoadingList: true });
  },
  [types.GET_CRYPTO_LIST_SUCCESS](state, { list }) {
    const newState = Object.assign({}, state, { list });
    delete newState.isLoadingList;
    return newState;
  },
  [types.GET_CRYPTO_LIST_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isLoadingList;
    return newState;
  },
  [types.GET_CRYPTO_ITEM_RATES_REQUEST](state) {
    return Object.assign({}, state, { isLoadingDailyRates: true });
  },
  [types.GET_CRYPTO_ITEM_RATES_SUCCESS](state, { itemRates }) {
    const newState = Object.assign({}, state, { itemRates });
    delete newState.isLoadingDailyRates;
    return newState;
  },
  [types.GET_CRYPTO_ITEM_RATES_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isLoadingDailyRates;
    return newState;
  },
});
