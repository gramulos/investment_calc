import { AsyncStorage } from 'react-native';
import * as types from './types';
import StockList from '../models/stockList';

const LOCAL_SHARES_LIST = 'LOCAL_SHARES_LIST';

// Reading items from device storage
export const getLocalItemList = () => (dispatch) => {
  dispatch(getLocalItemListRequest());
  return AsyncStorage.getItem(LOCAL_SHARES_LIST)
  .then((data) => {
    const jsonData = JSON.parse(JSON.parse(data));
    const stockList = new StockList(jsonData.list);
    dispatch(getLocalItemListSuccess(stockList));
  })
  .catch((err) => dispatch(getLocalItemListError(err)));
};

const getLocalItemListRequest = () => ({
  type: types.GET_LOCAL_ITEM_LIST_REQUEST,
});

const getLocalItemListSuccess = (shares) => ({
  type: types.GET_LOCAL_ITEM_LIST_SUCCESS,
  shares,
});

const getLocalItemListError = (error) => ({
  type: types.GET_LOCAL_ITEM_LIST_ERROR,
  error,
});

// Writing items to device storage
export const setLocalItemList = (list) => (dispatch) => {
  dispatch(setLocalItemListRequest());
  const data = JSON.stringify(list);
  return AsyncStorage.setItem(LOCAL_SHARES_LIST, JSON.stringify(data))
  .then(() => {
    dispatch(setLocalItemListSuccess());
    dispatch(getLocalItemList());
  })
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
