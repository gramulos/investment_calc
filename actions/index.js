import * as StockActions from './stocks';
import * as LocalStorage from './local';

export const ActionCreators = Object.assign({},
  StockActions,
  LocalStorage
);
