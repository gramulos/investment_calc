import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export default createReducer({}, {
  [types.SEARCH_ITEM_IN_STOCK_REQUEST](state) {
    return Object.assign({}, state, { isSearching: true });
  },
  [types.SEARCH_ITEM_IN_STOCK_SUCCESS](state, { payload }) {
    return Object.assign({}, state, { searchResult: payload, isSearching: false });
  },
  [types.SEARCH_ITEM_IN_STOCK_ERROR](state, { payload }) {
    return Object.assign({}, state, { error: payload, isSearching: false });
  },
});
