const WebSocket = require('ws');
const db = require('../config/db');

// Example WebSocket connection to get market data (Replace with real WebSocket API)
const marketWs = new WebSocket('wss://example-market-data-api.com');

// Handle incoming WebSocket messages
marketWs.on('message', (data) => {
  const marketData = JSON.parse(data);

  // For example, insert data into PostgreSQL
  const query = 'INSERT INTO market_data (symbol, price) VALUES ($1, $2)';
  db.query(query, [marketData.symbol, marketData.price])
    .then(res => console.log('Market data inserted'))
    .catch(err => console.error('Error inserting market data', err));
});

module.exports = {
  getMarketData: (req, res) => {
    db.query('SELECT * FROM market_data')
      .then(result => res.json(result.rows))
      .catch(err => res.status(500).send('Error fetching market data'));
  }
};
