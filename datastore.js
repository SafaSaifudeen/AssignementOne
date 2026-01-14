class DataStore {

  constructor() {
    this.stockList = [];
    this.stockByExchange = {};
  }

  addStock(stock) {
    this.stockList.push(stock);

    if (!this.stockByExchange[stock.exchange]) {
      this.stockByExchange[stock.exchange] = [];
    }
    this.stockByExchange[stock.exchange].push(stock);
  }

  getStocksByExchange(exchange) {
    if (exchange === 'all') {
      return this.stockList;
    }
    return this.stockByExchange[exchange] || [];
  }
}