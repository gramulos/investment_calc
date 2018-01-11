import axios from 'axios';
import * as types from './types';

const api = axios.create({
  baseURL: 'https://api.gdax.com/',
});

// Get crypto items list
export const getCryptoList = () => (dispatch) => {
  dispatch(getCryptoListRequest());
  return api.get('products')
  .then(products => api.get('currencies')
    .then(currencies => {
      const data = products.data.map(product => {
        const curr = currencies.data.find(currency => currency.id === product.base_currency);
        return Object.assign({}, product, { name: curr.name, id: undefined, ticker: product.id });
      });
      dispatch(getCryptoListSuccess(data));
    })
  )
  .catch((err) => dispatch(getCryptoListError(err)));
};

const getCryptoListRequest = () => ({
  type: types.GET_CRYPTO_LIST_REQUEST,
});

const getCryptoListSuccess = (list) => ({
  type: types.GET_CRYPTO_LIST_SUCCESS,
  list,
});

const getCryptoListError = (error) => ({
  type: types.GET_CRYPTO_LIST_ERROR,
  error,
});

// Get crypto item rates
export const getCryptoItemRates = (ticker) => (dispatch) => {
  dispatch(getCryptoItemRatesRequest());
  return api.get(`products/${ticker}/stats`)
  .then(({ data }) => dispatch(getCryptoItemRatesSuccess(data)))
  .catch((err) => dispatch(getCryptoItemRatesError(err)));
};

const getCryptoItemRatesRequest = () => ({
  type: types.GET_CRYPTO_ITEM_RATES_REQUEST,
});

const getCryptoItemRatesSuccess = (itemRates) => ({
  type: types.GET_CRYPTO_ITEM_RATES_SUCCESS,
  itemRates,
});

const getCryptoItemRatesError = (error) => ({
  type: types.GET_CRYPTO_ITEM_RATES_ERROR,
  error,
});
