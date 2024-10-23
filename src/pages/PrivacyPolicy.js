// src/pages/PrivacyPolicy.jsx
import React from "react";
import Header from "../components/Common/Header";

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="privacy-container">

                <h1>Privacy Policy</h1>
                <p>
                    This Privacy Policy explains how Crypto Tracker ("we", "our", or "us") collects, uses, and shares information about you when you use our application.
                </p>
                <h2>Information Collection</h2>
                <p>[Describe what information you collect]</p>
                <h2>How We Use Your Information</h2>
                <p>[Explain how you use the collected information]</p>
                <h2>Data Sharing</h2>
                <p>[Clarify if and how you share user data]</p>
                <h2>User Rights</h2>
                <p>[Inform users about their rights regarding their personal data]</p>
                <h2>Security Measures</h2>
                <p>[Describe how you protect user data]</p>
                <h2>Changes to This Policy</h2>
                <p>[Explain how changes to the Privacy Policy will be communicated]</p>
                <h2>Contact Information</h2>
                <p>If you have any questions, please contact us at [Your Contact Email].</p>
            </div>

        </>
    );
};

export default PrivacyPolicy;
