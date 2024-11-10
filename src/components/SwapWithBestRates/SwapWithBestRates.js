import React from 'react';
import './SwapWithBestRates.css'; // Import the CSS file for styling

const SwapWithBestRates = () => {
  return (
    <div className="swapWithBestRates__container reverseRow__container">
      <div className="swapWithBestRatesDescription__container">
        <div className="headingWrapper__container">
          <div>
            <h2 className="title__main">Swap With Best Rates</h2>
            <p className="description__text">
              Swap your crypto assets without leaving the app and catch all the trending coins. We go above and beyond to give you the easiest and most user-centric swapping experience on the market. On CoinStats, you're maximizing liquidity and optimizing your swapping automatically.
              <br />
              We aggregate the best swap paths across multiple liquidity sources to optimize your swapping. This means that you'll always access the best swap rates on various chains.
            </p>
          </div>
        </div>
        <button type="button" className="csButton__startSwapping largeButton__primary" data-cy="cs-button">
          Start Swapping
        </button>
      </div>
      <div className="tutorialBanner__container">
        <img
          alt="Swap Banner"
          src="https://coinstats.app/static/images/portfolio/landing/new-swap-banner-solana.svg"
          decoding="async"
          className="swapBanner__image"
          sizes="100vw"
       />
      </div>
    </div>
  );
};

export default SwapWithBestRates;
