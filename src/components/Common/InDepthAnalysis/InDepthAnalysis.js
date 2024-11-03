import React from 'react';
import './InDepthAnalysis.css';
import profitLoss from "../../../assets/video.mp4"

const InDepthAnalysis = () => {
  return (
    <div className="tutorial">
      <div className="tutorial-description">


        {/* Text Content */}
        <div className="heading-wrapper">
          <h2 className="title">Get In-Depth Profit &amp; Loss Analysis</h2>
          <p className="description">
            Connect your wallet to get 24h, daily, weekly, and cumulative Profit &amp; Loss
            analysis. Level up your crypto investing strategy.
          </p>
          <button className="connect-button">Connect Portfolio</button>
        </div>
      </div>

      {/* Video Section */}
      <div className="tutorial-banner">
   
        <video
          className="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          poster="/static/images/onboarding/profit-loss-banner.webp"
        >
          <source src={profitLoss} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default InDepthAnalysis;
