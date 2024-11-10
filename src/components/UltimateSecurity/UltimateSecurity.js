import React from 'react';
import './UltimateSecurity.css';


const UltimateSecurity = () => {
  return (
    <div className="ultimate-security-section">
      <div className="ultimate-security-header">
        <h2 className="ultimate-security-title">
          <b>The Ultimate Security for</b> <br />
          Your Digital Assets
        </h2>
        <p className="ultimate-security-description">
          CoinStats is equipped with a top-quality security infrastructure designed to ensure maximum protection of assets at all times. Since we ask for read-only access only, your holdings are perfectly safe under any conditions.
        </p>
      </div>
      
      <div className="ultimate-security-features">
        <div className="security-feature-item">
          <img
            className="security-feature-icon"
            loading="lazy"
            src="https://coinstats.app/static/images/stores/military-grade-encryption.svg"
            alt="Military-Grade Encryption"
          />
          <div>
            <p className="security-feature-title">Military-Grade Encryption</p>
            <span className="security-feature-description">
              We value our users' privacy, so we use the most advanced military-grade encryption to securely store data.
            </span>
          </div>
        </div>
        
        <div className="security-feature-item">
          <img
            className="security-feature-icon"
            loading="lazy"
            src="https://coinstats.app/static/images/stores/lock-gradient.svg"
            alt="Secure and Audited"
          />
          <div>
            <p className="security-feature-title">Secure and Audited</p>
            <span className="security-feature-description">
              We’re defending against external threats and guarding against misuse of insider access.
            </span>
          </div>
        </div>
        
        <div className="security-feature-item">
          <img
            className="security-feature-icon"
            loading="lazy"
            src="https://coinstats.app/static/images/stores/security-key.svg"
            alt="Industry Best Practices"
          />
          <div>
            <p className="security-feature-title">Industry Best Practices</p>
            <span className="security-feature-description">
              We take the most advanced security measures to ensure that your account is as safe as possible.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateSecurity;
