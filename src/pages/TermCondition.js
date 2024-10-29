import Header from "../components/Common/Header";
import React from "react";


const TermsCondition = () => {
  return (
    <>
    <Header/>
    <div className="bg-gray-100 p-6 sm:p-12 text-gray-700">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Terms and Conditions
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Introduction</h2>
        <p className="mt-2">
          Welcome to [Crypto Tracker Platform]! By accessing our platform and using our services, you agree to be bound by the terms and conditions stated herein. Please read these terms carefully before using our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">User Accounts</h2>
        <p className="mt-2">
          To use certain features, you may need to register an account. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account. Notify us immediately if you suspect any unauthorized use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Service Usage</h2>
        <p className="mt-2">
          Our platform is for informational purposes only and does not provide financial advice. By using our service, you agree not to misuse the information and acknowledge that investment decisions are made at your discretion.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Intellectual Property</h2>
        <p className="mt-2">
          All content, trademarks, and data provided on this platform are the property of [Crypto Tracker Platform] or its licensors and are protected by applicable intellectual property laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Data Privacy</h2>
        <p className="mt-2">
          We take data privacy seriously. Please review our Privacy Policy for details on how your data is collected, stored, and used. By using our services, you consent to our data practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Disclaimer</h2>
        <p className="mt-2">
          [Crypto Tracker Platform] provides data for informational purposes only and is not liable for any inaccuracies. We are not responsible for any financial losses that may arise from the use of this information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Changes to Terms</h2>
        <p className="mt-2">
          We reserve the right to modify or replace these terms at any time. It is your responsibility to review these terms periodically for any updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-700">Contact Us</h2>
        <p className="mt-2">
          For any questions or concerns regarding these terms, please reach out to us at <a href="mailto:support@cryptotracker.com" className="text-blue-600">support@cryptotracker.com</a>.
        </p>
      </section>
    </div>
    </>
  );
};

export default TermsCondition;