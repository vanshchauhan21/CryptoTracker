// src/pages/PrivacyPolicy.jsx
import React from "react";
// import Header from "../components/Common/Header";

import "./PrivacyPolicy.css";
import Header from "../../components/Common/Header/index.js";


const PrivacyPolicy = () => {


    return (
        <>
            <Header className="header">
                <h1 className="h1">Privacy Policy</h1>
            </Header>

            <div className=" container content">
                <p>Effective Date: <strong>October 29, 2024</strong></p>

                <h2 className="h2">Introduction</h2>
                <p>
                    Welcome to Crypto Tracker. Your privacy is important to us, and we are committed to protecting the personal information you share with us through our platform. This Privacy Policy explains how we collect, use, disclose, and protect your data when you use <a href="https://crypto-tracker-kappa-ebon.vercel.app/" className="website">Crypto Tracker</a> (the "Website"). By accessing or using our Website, you agree to the practices described in this Privacy Policy.
                </p>

                <h2 className="h2">1. Information We Collect</h2>
                <p>We may collect the following types of information when you use our Website:</p>
                <ul className="ul">
                    <li><strong>Personal Information:</strong> We do not collect personal information such as your name, email address, or contact details unless you choose to provide it directly by contacting us.</li>
                    <li>
                        <strong>Automatically Collected Information:</strong> We may collect information about your device and browsing activity, including:
                        <ul className="ul">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Time zone settings</li>
                            <li>Operating system</li>
                            <li>Information about your interaction with the Website (e.g., the pages you visit)</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="h2">2. Use of Collected Information</h2>
                <p>We may use the collected information for the following purposes:</p>
                <ul className="ul">
                    <li>To improve the functionality and user experience of the Website</li>
                    <li>To monitor usage patterns and performance</li>
                    <li>To enhance security and prevent potential security breaches</li>
                    <li>To respond to user inquiries or feedback, if applicable</li>
                </ul>

                <h2 className="h2">3. Cookies</h2>
                <p>
                    The Website may use cookies to enhance user experience. A cookie is a small file that is placed on your device when you visit a website. You can set your browser to refuse cookies or notify you when cookies are being sent. However, certain features of the Website may not function properly without cookies.
                </p>

                <h2 className="h2">4. Data Sharing and Disclosure</h2>
                <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share non-personally identifiable information (e.g., aggregate user statistics) with third parties to help us improve the Website’s performance.
                </p>
                <p>We may also disclose information in the following cases:</p>
                <ul className="ul">
                    <li>To comply with legal obligations or respond to legal requests</li>
                    <li>To protect the rights, property, or safety of Crypto Tracker, its users, or others</li>
                </ul>

                <h2 className="h2">5. Security of Your Information</h2>
                <p>
                    We take the security of your data seriously and implement appropriate technical and organizational measures to protect it. However, no system can guarantee complete security, and we cannot ensure or warrant the security of any information you transmit to us.
                </p>

                <h2 className="h2">6. Third-Party Links</h2>
                <p>
                    Our Website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any website you visit.
                </p>

                <h2 className="h2">7. Changes to this Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. When we do, we will revise the “Effective Date” at the top of this page. We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information.
                </p>

                <h2 className="h2">8. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy or how we handle your information, feel free to reach out to us via our social media platforms.
                </p>
            </div>
        </>
    );


};

export default PrivacyPolicy;
