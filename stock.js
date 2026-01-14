class Stock {
  constructor(symbol, exchange) {
    this.symbol = symbol;
    this.exchange = exchange;
    this.open = 0;
    this.high = 0;
    this.low = 0;
    this.close = 0;
    this.bid = 0;
    this.ask = 0;
    this.tradeDate = new Date();
  }
  updateRandomValues() {
    try {
      this.open = this._randomNumber();
      this.high = this._randomNumber();
      this.low = this._randomNumber();
      this.close = this._randomNumber();
      this.bid = this._randomNumber();
      this.ask = this._randomNumber();
      this.tradeDate = new Date();
    } catch (e) {
      console.error('Stock update failed', e);
    }
  }
  _randomNumber() {
    return +(Math.random() * 100).toFixed(2);
  }

}