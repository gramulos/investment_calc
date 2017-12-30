import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export default createReducer({}, {
  [types.GET_LOCAL_ITEM_LIST_REQUEST](state) {
    return Object.assign({}, state, { isReadingStorage: true });
  },
  [types.GET_LOCAL_ITEM_LIST_SUCCESS](state, { items }) {
    const newState = Object.assign({}, state, { items });
    delete newState.isReadingStorage;
    return newState;
  },
  [types.GET_LOCAL_ITEM_LIST_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isReadingStorage;
    return newState;
  },
  [types.SET_LOCAL_ITEM_LIST_REQUEST](state) {
    return Object.assign({}, state, { isWritingToStorage: true });
  },
  [types.SET_LOCAL_ITEM_LIST_SUCCESS](state) {
    const newState = Object.assign({}, state);
    delete newState.isWritingToStorage;
    return newState;
  },
  [types.SET_LOCAL_ITEM_LIST_ERROR](state, { error }) {
    const newState = Object.assign({}, state, { error });
    delete newState.isWritingToStorage;
    return newState;
  },
});
