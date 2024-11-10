// src/pages/Careers.js
import React from 'react';
import './Careers.css'; // Ensure you have a CSS file for styling
import Header from "../components/Common/Header";
const Careers = () => {
  return (
    <>
    <Header />
    <div className="careers-container">
      <h1 className="careers-title">Join Our Team</h1>
      <p className="careers-intro">
        At CryptoTracker, we are always looking for talented individuals who are passionate about cryptocurrency and technology. Explore our open positions and become a part of our innovative team!
      </p>

      <div className="job-list">
        <div className="job-card">
          <h2 className="job-title">Frontend Developer</h2>
          <p className="job-description">
            We are seeking a skilled Frontend Developer to join our team. You will be responsible for creating user-friendly interfaces and enhancing the user experience of our platform.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
        
        <div className="job-card">
          <h2 className="job-title">Backend Developer</h2>
          <p className="job-description">
            As a Backend Developer, you will work on server-side logic and ensure high performance and responsiveness to requests from the frontend.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>

        <div className="job-card">
          <h2 className="job-title">Product Manager</h2>
          <p className="job-description">
            We are looking for a Product Manager to oversee the development and launch of new features. You will collaborate with cross-functional teams to define product vision and strategy.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Careers;



