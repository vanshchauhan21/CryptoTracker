import React from 'react';
import './FreeTrial.css'; // External CSS for styling

import davidBanner from '../../../assets/Free-trial.jpg';

const FreeTrial = () => {
  return (
    <div className="free-trial-container">
      <div className="free-trial-content">
        {/* Heading */}
        <div className="heading-wrapper">
          <h2 className="title">Go Premium for Free</h2>
        </div>

        {/* Benefits */}
        <div className="benefits">
          <Benefit text="Connect up to 100 portfolios" />
          <Benefit text="Track up to 100,000 transactions" />
          <Benefit text="View in-depth Profit & Loss analysis" />
          <Benefit text="Get AI-powered crypto price predictions" />
        </div>

        {/* Free Trial Button */}
        <button className="start-trial-btn">
          Start My Free Trial
        </button>
        <span className="plan-description">
          After your 7-day free trial, the Premium plan will be <br/>as little as $13.99 per month 🍔
        </span>

        {/* Additional Info */}
        <div className="additional-info">
          <a
            href="/terms.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            Terms &amp; Conditions
          </a>
          <span>·</span>
          <button className="cancel-button">Cancel Anytime</button>
        </div>
      </div>

      {/* David Banner Image */}
      <div className="david-banner">
        <img src={davidBanner} alt="David Banner" loading="lazy" />
      </div>
    </div>
  );
};

// Reusable component for benefits
const Benefit = ({ text }) => (
  <div className="benefit">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="var(--e80Color)" />
      <path
        d="M18.3 8.67L10.6019 16.5L5.69995 11.514L6.85908 10.335L10.6019 14.142L17.1408 7.5L18.3 8.67Z"
        fill="var(--bgColor)"
      />
    </svg>
    <p className="benefit-content">{text}</p>
  </div>
);

export default FreeTrial;
