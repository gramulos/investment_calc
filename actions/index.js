import * as StockActions from './stocks';
import * as LocalStorage from './local';
import * as CryptoActions from './crypto';

export const ActionCreators = Object.assign({},
  StockActions,
  LocalStorage,
  CryptoActions,
);
