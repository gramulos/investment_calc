import uuidv4 from 'uuid/v4';
import { COMMISSION_FIXED, INTEREST_FIXED } from '../config/data';

export default class StockItem {
  constructor({
      id = uuidv4(),
      name,
      ticker,
      buyPrice = 0,
      sellPrice = 0,
      count = 0,
      comission = 0,
      interest = 0,
      commissionType = COMMISSION_FIXED,
      isCryptoCurrency = false,
      interestType = INTEREST_FIXED,
      currency = 'EUR',
      icon = 'mtr',
    }) {
    this.id = id;
    this.name = name;
    this.ticker = ticker;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.count = count;
    this.comission = comission;
    this.interest = interest;
    this.interestType = interestType;
    this.commissionType = commissionType;
    this.isCryptoCurrency = isCryptoCurrency;
    this.currency = currency;
    this.icon = icon;
  }
  toString() {
    return JSON.stringify(this);
  }
}
