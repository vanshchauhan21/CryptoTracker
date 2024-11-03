// CookiesPolicy.js

import React from "react";
import Header from "../components/Common/Header";

const CookiesPolicy = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Cookies Policy</h1>
        <p className="text-gray-600 mb-6">
          Last updated: October 30, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Our Crypto Tracker application uses cookies to enhance your experience, improve performance, and analyze how our site is used. This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. What Are Cookies?</h2>
          <p className="text-gray-600">
            Cookies are small text files that are stored on your device when you visit websites. They help track and store user preferences and can assist in personalizing your experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Essential Cookies:</strong> Necessary for the core functionality of our crypto tracking services.</li>
            <li><strong>Performance Cookies:</strong> These cookies help us understand and improve the performance of our site.</li>
            <li><strong>Analytical Cookies:</strong> Used to track user behavior on our platform for a better user experience.</li>
            <li><strong>Advertising Cookies:</strong> Helps deliver relevant ads, if applicable, based on your browsing habits.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. How We Use Cookies</h2>
          <p className="text-gray-600">
            We use cookies to remember your settings, analyze site traffic, and provide you with tailored cryptocurrency insights. The data gathered is anonymous and solely intended for improving our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Managing Your Cookies</h2>
          <p className="text-gray-600">
            You can control and manage cookies through your browser settings. Please note that disabling cookies may affect your experience and functionality on our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Changes to This Cookies Policy</h2>
          <p className="text-gray-600">
            We may update this policy occasionally to reflect changes in technology, legal requirements, or our services. Check this page regularly for the latest version.
          </p>
        </section>

        <div className="text-gray-500 text-sm mt-6">
          <p>By continuing to use our crypto tracking service, you agree to our use of cookies as outlined in this policy. For questions, contact us at <span className="text-blue-500">support@cryptotracker.com</span>.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CookiesPolicy;
