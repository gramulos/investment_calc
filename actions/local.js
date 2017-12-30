import { AsyncStorage } from 'react-native';
import * as types from './types';

const LOCAL_SHARES_LIST = 'LOCAL_SHARES_LIST';

// Reading items from device storage
export const getLocalItemList = () => (dispatch) => {
  dispatch(getLocalItemListRequest());
  AsyncStorage.getItem(LOCAL_SHARES_LIST)
  .then((data) => dispatch(getLocalItemListSuccess(JSON.parse(data))))
  .catch((err) => dispatch(getLocalItemListError(err)));
};

const getLocalItemListRequest = () => ({
  type: types.GET_LOCAL_ITEM_LIST_REQUEST,
});

const getLocalItemListSuccess = (items) => ({
  type: types.GET_LOCAL_ITEM_LIST_SUCCESS,
  items,
});

const getLocalItemListError = (error) => ({
  type: types.GET_LOCAL_ITEM_LIST_ERROR,
  error,
});

// Writing items to device storage
export const setLocalItemList = (list) => (dispatch) => {
  dispatch(setLocalItemListRequest());
  AsyncStorage.setItem(LOCAL_SHARES_LIST, JSON.stringify(list))
  .then(() => dispatch(setLocalItemListSuccess()))
  .catch((err) => dispatch(setLocalItemListError(err)));
};

const setLocalItemListRequest = () => ({
  type: types.SET_LOCAL_ITEM_LIST_REQUEST,
});

const setLocalItemListSuccess = () => ({
  type: types.SET_LOCAL_ITEM_LIST_SUCCESS,
});

const setLocalItemListError = (error) => ({
  type: types.SET_LOCAL_ITEM_LIST_ERROR,
  error,
});
