import * as types from './types';

export const searchItemInStock = (item) => (dispatch) => {
  dispatch(searchItemInStockRequest());
  return fetch(`https://api.tiingo.com/tiingo/daily/${item}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Token 529808af478752ce74c895da1bca2ba5d915529e',
    },
  })
  .then(response => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    dispatch(searchItemInStockSuccess(responseJson));
  })
  .catch((err) => dispatch(searchItemInStockError(err)));
};

const searchItemInStockRequest = () => ({
  type: types.SEARCH_ITEM_IN_STOCK_REQUEST,
});

const searchItemInStockSuccess = (item) => ({
  type: types.SEARCH_ITEM_IN_STOCK_SUCCESS,
  payload: item,
});

const searchItemInStockError = (error) => ({
  type: types.SEARCH_ITEM_IN_STOCK_ERROR,
  payload: error,
});
