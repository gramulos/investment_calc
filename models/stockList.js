import StockItem from './stockItem';

export default class StockList {
  constructor(items) {
    if (items && items.length > 0) {
      this.items = items.forEach(item => new StockItem(item));
    }
  }
  toString() {
    return JSON.stringify(this.items);
  }
  delete(id) {
    this.items = this.items.filter(item => item.id !== id);
    return this;
  }
  add(item) {
    this.items.push(new StockItem(item));
    return this;
  }
}
