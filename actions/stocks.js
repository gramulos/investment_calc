import axios from 'axios';
import * as types from './types';

// Configuring API instance
const api = axios.create({
  baseURL: 'https://api.tiingo.com/tiingo/daily/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Token 529808af478752ce74c895da1bca2ba5d915529e',
  }
});

// Search item in stock by ticker (For example: googl)
export const searchItemInStock = (ticker) => (dispatch) => {
  dispatch(searchItemInStockRequest());
  api.get(ticker)
  .then(({ data }) => dispatch(searchItemInStockSuccess(data)))
  .catch((err) => dispatch(searchItemInStockError(err)));
};

const searchItemInStockRequest = () => ({
  type: types.SEARCH_ITEM_IN_STOCK_REQUEST,
});

const searchItemInStockSuccess = (searchResult) => ({
  type: types.SEARCH_ITEM_IN_STOCK_SUCCESS,
  searchResult,
});

const searchItemInStockError = (error) => ({
  type: types.SEARCH_ITEM_IN_STOCK_ERROR,
  error,
});

// Get lates available item rates by ticker
export const getItemRates = (ticker) => (dispatch) => {
  dispatch(getItemRatesRequest());
  api.get(`${ticker}/prices`)
  .then(({ data }) => dispatch(getItemRatesSuccess(data)))
  .catch((err) => dispatch(getItemRatesError(err)));
};

const getItemRatesRequest = () => ({
  type: types.GET_ITEM_RATES_REQUEST,
});

const getItemRatesSuccess = (itemRates) => ({
  type: types.GET_ITEM_RATES_SUCCESS,
  itemRates
});

const getItemRatesError = (error) => ({
  type: types.GET_ITEM_RATES_ERROR,
  error,
});

// Get available rates history for specific item by date range
export const getItemRatesHistory = (ticker, startDate, endDate) => (dispatch) => {
  dispatch(getItemRatesHistoryRequest());
  api.get(`${ticker}/prices?startDate=${startDate}&endDate=${endDate}`)
  .then(({ data }) => dispatch(getItemRatesHistorySuccess(data)))
  .catch((err) => dispatch(getItemRatesHistoryError(err)));
};

const getItemRatesHistoryRequest = () => ({
  type: types.GET_ITEM_RATES_HISTORY_REQUEST,
});

const getItemRatesHistorySuccess = (itemRatesHistory) => ({
  type: types.GET_ITEM_RATES_HISTORY_SUCCESS,
  itemRatesHistory
});

const getItemRatesHistoryError = (error) => ({
  type: types.GET_ITEM_RATES_HISTORY_ERROR,
  error,
});
