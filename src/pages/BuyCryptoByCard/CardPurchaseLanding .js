import React from 'react';
import { Link } from 'react-router-dom';

const CardPurchaseLanding = () => (
  <div className="card-purchase-landing">
    <h1>Buy Crypto With Your Card</h1>
    <p>Start investing in crypto with a secure card purchase. It only takes a few minutes!</p>
    <Link to="/buy-card/enter-details">
      <button>Get Started</button>
    </Link>
  </div>
);

export default CardPurchaseLanding;
