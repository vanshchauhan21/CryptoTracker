import React from 'react';
import { Link } from 'react-router-dom';

import "./BuyCryptoCoin.css";

function BuyCryptoCoin() {
  return (
    <div className="buy-crypto-container">
      <h1 className="buy-crypto-heading">Buy Crypto With Your Card</h1>
      <p className="buy-crypto-description">Start investing in crypto with a secure card purchase. It only takes a few minutes!</p>
      <Link to="/buy-card/enter-details">
        <button className="buy-crypto-button">Get Started</button>
      </Link>
    </div>
  );
}

export default BuyCryptoCoin;
