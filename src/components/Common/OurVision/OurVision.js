import React from 'react';
import './OurVision.css'; // Import your CSS file here
import logo from "../../../assets/logo-2.png";

const OurVision = () => {
  return (
    <div className="vision-container">
      <div style={{ display: 'block' }}>
        <div style={{ opacity: 1, transform: 'none' }}>
          <h4 className="vision-heading">OUR VISION</h4>
        </div>
      </div>

      <div style={{ display: 'block' }}>
        <div style={{ opacity: 1, transform: 'none' }}>
          <h2 className="vision-subheading">Cryptocurrency in<br /> Every Wallet™</h2>
        </div>
      </div>

      <div style={{ display: 'block' }}>
        <div style={{ opacity: 1, transform: 'none' }}>
          <div className="vision-logo-container">
            <img
              src={logo}
              alt="crypto-tracker-logo"
              loading="lazy"
              className="vision-logo"
            />
          </div>
        </div>
      </div>

      <div className='fund-container'>
        <div className='fund-date'>
          <span>Funded in </span>
          <p>Oct-2024</p>
        </div>
        <div className='user'>
          <span>User</span>
          <p>1M</p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
