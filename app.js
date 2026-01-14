$(document).ready(function () {
  const dataStore = new DataStore();

  const stockPairs = [
    { exchange: 'TDWL', symbol: '1010' },
    { exchange: 'TDWL', symbol: '1020' },
    { exchange: 'TDWL', symbol: '1090' },
    { exchange: 'DFM', symbol: 'EMAAR' },
    { exchange: 'DFM', symbol: 'DFM' },
    { exchange: 'DFM', symbol: 'DIB' }
  ];

  stockPairs.forEach(item => {
    const stock = new Stock(item.symbol, item.exchange);
    stock.updateRandomValues();
    dataStore.addStock(stock);
  });

  $('#exchangeSelect').on('change', function () {
    renderTable($(this).val());
  });

  function renderTable(exchange) {
    const stocks = dataStore.getStocksByExchange(exchange);
    const tbody = $('#stockTable tbody');
    tbody.empty();

    stocks.forEach(stock => {
      tbody.append(`
        <tr>
          <td>${stock.symbol}</td>
          <td>${stock.open}</td>
          <td>${stock.high}</td>
          <td>${stock.low}</td>
          <td>${stock.close}</td>
          <td>${stock.bid}</td>
          <td>${stock.ask}</td>
          <td>${stock.tradeDate.toLocaleDateString()}</td>
        </tr>
      `);
    });
  }
//update random values every 3secs
  function refreshData() {
    dataStore.stockList.forEach(stock => {
      stock.updateRandomValues();
    });

    renderTable($('#exchangeSelect').val());

    setTimeout(refreshData, 3000);
  }

  renderTable('TDWL');
  refreshData();
});
