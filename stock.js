class Stock{
    //symbol (string), exchange (string), open (number), high (number), low (number), close (number), bid (number), ask (number), trade date (date)
    constructor (symbol, exchange){
        this.symbol = symbol;
        this.exchange = exchange;
        this.open= 0;
        this.high =0;
        this.low = 0;
        this.close = 0;
        this.bid = 0; 
        this.ask = 0;
        this.tradeDate = new Date();
    }
    updateRandomValues() {
    try {
      this.open = this._randomNumber();
      this.high = this.open + this._randomNumber();
      this.low = this.open - this._randomNumber();
      this.close = this._randomNumber();
      this.bid = this._randomNumber();
      this.ask = this._randomNumber();
      this.tradeDate = new Date();
    } catch (e) {
      console.error('Stock update failed', e);
    }
  }
      _randomNumber() {
        //console.log('Random number generated:', value, typeof value);
        return +(Math.random() * 100).toFixed(2);
    }

}