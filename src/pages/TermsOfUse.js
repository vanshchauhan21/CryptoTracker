import React from "react";
import "./TermsOfUse.css";
import Header from "../components/Common/Header";

const TermsOfUse = () => {
  return (
    <div>
      <Header />
      <div className="terms-container">
        <h1 className="terms-title">Terms of Use</h1>
        <p className="last-updated">Last Updated: 1/11/24</p>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing <strong>Crypto Tracker</strong>, you agree to be bound
            by these Terms of Use, along with our Privacy Policy. We reserve the
            right to modify or replace these Terms at any time. Continued use of
            the site signifies your acceptance of any revised Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use of Services</h2>
          <p>
            <strong>Crypto Tracker</strong> provides information and tools,
            including cryptocurrency calculators, market analysis, and
            conversion tools. All information is for informational purposes only
            and is not financial advice.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Account and Security</h2>
          <p>
            You may need an account for certain features. You agree to provide
            accurate info and keep your login details secure. Notify us if you
            suspect unauthorized use.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Intellectual Property Rights</h2>
          <p>
            All content on <strong>Crypto Tracker</strong> is protected by
            intellectual property laws. Unauthorized use is prohibited.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. User Conduct</h2>
          <p>
            You agree not to use <strong>Crypto Tracker</strong> for unlawful or
            disruptive activities. Violations may result in termination of
            access.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            <strong>Crypto Tracker</strong> is provided "as-is" without
            warranties. We do not guarantee the accuracy or reliability of
            information on the site.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            <strong>Crypto Tracker</strong> is not liable for any damages
            arising from your use of our site or services.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at [Your
            Contact Information].
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
