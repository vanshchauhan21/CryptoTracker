import React from 'react';
import LineGraph from './LineGraph';
import './styles.css'; // Import the CSS for styling

const TopCoinsTable = ({ topCoins }) => {
  return (
    <div className="table-container">
      <table className="top-coins-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price (USD)</th>
            <th>7-Day Price Change</th>
          </tr>
        </thead>
        <tbody>
          {topCoins.map((coin) => (
            <tr key={coin.id}>
              <td className="coin-name">{coin.name}</td>
              <td className="coin-symbol">{coin.symbol.toUpperCase()}</td>
              <td className="coin-price">${coin.current_price.toFixed(2)}</td>
              <td className="coin-price-change">
                <LineGraph data={coin.prices} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCoinsTable;
