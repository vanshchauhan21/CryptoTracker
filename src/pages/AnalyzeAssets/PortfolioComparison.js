import React from 'react';
import './PortfolioComparison.css';

const PortfolioComparison = () => {
  return (
    <div className="main-wrapper-porfolio">
      <div className="deatil-wrapper-porfolio">
        <div className="all-info-porfolio">
          <h2 className="title__fU7gu title__UGh1s">Your Portfolio vs the Market</h2>
          <p className="description__e7VeV description__iTu36">
            Is your portfolio outperforming the market, matching it, or underperforming? It's time to put your portfolio into perspective by comparing it to the market overall. <br />
            Depending on this metric, you can make a decision to diversify more, check how you stack up in terms of volatility, or make the necessary changes to enhance performance.<br />
          </p>
        </div>
        <button type="button" className="cs-button__iO2MF tutorialButton__wQg_i large__e7_uP">
          Connect Now
        </button>
      </div>
      <div className="main-banner">
        <img
          alt="Tutorial Banner"
          src="https://coinstats.app/static/images/portfolio/landing/new-portfolio-banner-analytics.svg"
       
        />
      </div>
    </div>
  );
};

export default PortfolioComparison;
