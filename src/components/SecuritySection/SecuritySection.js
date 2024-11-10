

import React from 'react';
import './SecuritySection.css'; 
import { FaLock, FaShieldAlt, FaRegCheckCircle, FaRegStar } from 'react-icons/fa'; 

const SecuritySection = () => {
  return (
    <div className="security-section">
      <h2 className="security-heading">The Ultimate Security for Your Digital Assets</h2>
      <p className="security-description">
        At CryptoTracker, we prioritize the security of your data and financial information. Our robust security measures include:
      </p>
      <div className="security-features">
        <div className="security-feature">
          <FaLock className="security-icon" />
          <h3>Advanced Encryption</h3>
          <p>All sensitive data is encrypted using industry-standard encryption protocols, ensuring confidentiality and protection against unauthorized access.</p>
        </div>
        <div className="security-feature">
          <FaShieldAlt className="security-icon" />
          <h3>Secure APIs</h3>
          <p>We utilize secure APIs for safe data exchanges, ensuring your information is protected at all times.</p>
        </div>
        <div className="security-feature">
          <FaRegCheckCircle className="security-icon" />
          <h3>Regular Audits</h3>
          <p>Our platform adheres to best security practices, including regular security audits to identify and mitigate potential vulnerabilities.</p>
        </div>
        <div className="security-feature">
          <FaRegStar className="security-icon" />
          <h3>User Education</h3>
          <p>We provide resources and guidance to educate users about best practices for securing their digital assets.</p>
        </div>
      </div>
      <p className="security-assurance">
        Rest assured that your digital assets are safe with us, and your privacy is respected.
      </p>
    </div>
  );
};

export default SecuritySection;