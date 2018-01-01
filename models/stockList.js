import StockItem from './stockItem';

export default class StockList {
  constructor(list) {
    if (list instanceof Array) {
      this.list = list.map(item => new StockItem(item));
    } else {
      this.list = [];
    }
  }
  toString() {
    return JSON.stringify(this.list);
  }
  delete(id) {
    this.list = this.list.filter(item => item.id !== id);
    return this;
  }
  add(item) {
    let newItem = item;
    if (!(item instanceof StockItem)) {
      newItem = new StockItem(item);
    }
    this.list.push(newItem);
    return this;
  }
}
