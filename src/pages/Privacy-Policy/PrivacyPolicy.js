import React from 'react';
import Header from '../../components/Common/Header';
import './PrivacyPolicy.css'; // You can add a CSS file to style this page if needed

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            At [Your Company Name], we prioritize the privacy and security of your data. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to protect it in alignment with industry standards and regulations.
          </p>
        </section>
        
        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We collect information necessary to provide secure and efficient services. This may include:
          </p>
          <ul>
            <li>Personal Identification: Information such as name, email address, and contact information.</li>
            <li>Financial Information: Transaction and wallet details required for managing your crypto assets.</li>
            <li>Usage Data: Information on how you interact with our platform, including device information and IP addresses.</li>
          </ul>
        </section>
        
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Provide and personalize our services, including account management and portfolio tracking.</li>
            <li>Process transactions and notify you of updates or important account information.</li>
            <li>Improve our platform’s functionality and secure user data.</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Data Security and Protection</h2>
          <p>
            We apply industry-standard encryption and secure storage practices to protect your data from unauthorized access. Your data is stored securely on our servers, with restricted access to only those employees who need it to perform their job functions.
          </p>
        </section>
        
        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties unless required by law or necessary for service delivery (e.g., with payment providers for transaction processing).
          </p>
        </section>
        
        <section>
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your user experience and understand usage patterns. You can manage your preferences in your browser settings.
          </p>
        </section>
        
        <section>
          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. For any privacy-related inquiries, please contact our support team.
          </p>
        </section>
        
        <section>
          <h2>8. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be reflected on this page, and significant updates will be communicated to you directly.
          </p>
        </section>
        
        <section>
          <h2>9. Contact Us</h2>
          <p>
            For questions regarding this Privacy Policy, please reach out to us at privacy@[yourcompany].com.
          </p>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
