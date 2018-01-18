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
    this.list = this.list.filter(listItem => listItem.id !== id);

    if (this.list.legth === 0) {
      return null;
    }

    return this;
  }
  update(item) {
    const index = this.list.findIndex(listItem => listItem.id === item.id);
    this.list.splice(index, 1, new StockItem(item));
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
  clear() {
    return null;
  }
}
