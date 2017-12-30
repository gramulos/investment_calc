import uuidv4 from 'uuid/v4';

export default class StockItem {
  constructor({
      id = uuidv4(),
      name,
      ticker,
      buyPrice = 0,
      sellPrice = 0,
      count = 0,
      comission = 0,
      comissionFixed = true,
      cryptoCurrency = false,
      currency = 'EUR'
    }) {
    this.id = id;
    this.name = name;
    this.ticker = ticker;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.count = count;
    this.comission = comission;
    this.comissionFixed = comissionFixed;
    this.cryptoCurrency = cryptoCurrency;
    this.currency = currency;
  }
  toString() {
    return JSON.stringify(this);
  }
}
