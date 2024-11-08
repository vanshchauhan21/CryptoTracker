import Header from "../components/Common/Header";
import React from "react";
import "./TermCondition.css"; // Import the CSS file

const TermsCondition = () => {
  return (
    <>
      <Header/>
      <div className="terms-containers">
        <h1 className="terms-heading">Terms and Conditions</h1>

        <div className="terms-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Crypto Tracker Platform! By accessing our platform and using our services, 
            you agree to be bound by the terms and conditions stated herein. 
            Please read these terms carefully before using our platform.
          </p>
        </div>

        <div className="terms-section">
          <h2>User Accounts</h2>
          <p>
            To use certain features, you may need to register an account. 
            You are responsible for maintaining the confidentiality of your account information 
            and for any activities that occur under your account. 
            Notify us immediately if you suspect any unauthorized use.
          </p>
        </div>

        <div className="terms-section">
          <h2>Service Usage</h2>
          <p>
            Our platform is for informational purposes only and does not provide financial advice. 
            By using our service, you agree not to misuse the information and acknowledge that 
            investment decisions are made at your discretion.
          </p>
        </div>

        <div className="terms-section">
          <h2>Intellectual Property</h2>
          <p>
            All content, trademarks, and data provided on this platform are the property of 
            Crypto Tracker Platform or its licensors and are protected by applicable 
            intellectual property laws.
          </p>
        </div>

        <div className="terms-section">
          <h2>Data Privacy</h2>
          <p>
            We take data privacy seriously. Please review our Privacy Policy for details on 
            how your data is collected, stored, and used. By using our services, you consent 
            to our data practices.
          </p>
        </div>

        <div className="terms-section">
          <h2>Disclaimer</h2>
          <p>
            Crypto Tracker Platform provides data for informational purposes only and is not 
            liable for any inaccuracies. We are not responsible for any financial losses that 
            may arise from the use of this information.
          </p>
        </div>

        <div className="terms-section">
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these terms at any time. It is your 
            responsibility to review these terms periodically for any updates.
          </p>
        </div>

        <div className="terms-section">
          <h2>Contact Us</h2>
          <p>
            For any questions or concerns regarding these terms, please reach out to us at{" "}
            <a href="mailto:support@cryptotracker.com" className="terms-link">
              support@cryptotracker.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;