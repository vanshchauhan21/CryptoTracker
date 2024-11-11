import React from 'react';
import './ExitStrategy.css'; 

// Import corresponding CSS file
import exitStrategyImg from "../../assets/exit-strategy.avif";
const ExitStrategy = () => {
  return (
    <div className="exit-strategy-container">
      <div className="exit-strategy-description-wrapper">
        <div className="heading-wrapper">
          <div>
            <h2 className="exit-strategy-title">
              Use AI for Your Exit Strategy &amp; <b>Price Predictions</b> ✨
            </h2>
            <p className="exit-strategy-description">
              Exit strategy lets you set up pre-determined sell prices for all your crypto assets. This kind of planning will help you avoid making emotional decisions and take profits at the right time.
              <br />
              If you're not sure about what price targets to set, let our AI help. It uses advanced algorithms to offer price estimates based on market history and comparison.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="exit-strategy-button"
          title=""
          data-cy="exit-strategy-button"
        >
          Set up Your Exit Strategy
        </button>
      </div>
      <div className="exit-strategy-banner">
        <picture>
         
          <img
            src={exitStrategyImg}
            loading="lazy"
            alt="Exit strategy banner"
            className="exit-strategy-banner-img"
          />
        </picture>
      </div>
    </div>
  );
};

export default ExitStrategy;
