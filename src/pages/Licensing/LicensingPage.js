import React from 'react';
import Header from '../../components/Common/Header'; // Assuming you have a common header component
import './LicensingPage.css'; // CSS file for custom styling

function LicensingPage() {
  return (
    <>
      <Header />
      <div className="licensing-page-container">
        <h1>Licensing Information</h1>
        
        <section>
          <h2>1. Overview</h2>
          <p>
            Welcome to the CryptoTracker platform. This page outlines the licensing terms and conditions that apply to the software and resources provided on this platform. By using this platform, you agree to abide by the terms described here.
          </p>
        </section>
        
        <section>
          <h2>2. Licensing Types</h2>
          <p>
            The software and resources available on CryptoTracker are provided under various licensing terms. These include:
          </p>
          <ul>
            <li><strong>Open Source License:</strong> Some parts of the software are open-source and may be used, modified, and distributed in accordance with the respective open-source licenses (e.g., MIT, GPL, etc.).</li>
            <li><strong>Commercial License:</strong> Certain features or tools on the platform may be licensed commercially. These tools are subject to the terms specified in the commercial license agreement.</li>
            <li><strong>Content License:</strong> All content, including but not limited to documentation, graphics, and design, is subject to specific content licenses which govern its use and distribution.</li>
          </ul>
        </section>
        
        <section>
          <h2>3. User Rights and Responsibilities</h2>
          <p>
            As a user of CryptoTracker, you have the right to:
          </p>
          <ul>
            <li>Use the software for personal, non-commercial purposes under the applicable license terms.</li>
            <li>Modify the software within the bounds of the open-source license (if applicable).</li>
            <li>Distribute the software only in accordance with the terms of the relevant licenses.</li>
          </ul>
          <p>
            You are responsible for:
          </p>
          <ul>
            <li>Ensuring your usage of the platform is in compliance with the licensing terms.</li>
            <li>Obtaining any necessary permissions if you intend to use the software for commercial purposes.</li>
            <li>Respecting the intellectual property rights associated with the platform's content.</li>
          </ul>
        </section>

        <section>
          <h2>4. Restrictions</h2>
          <p>
            While using the CryptoTracker platform, you are prohibited from:
          </p>
          <ul>
            <li>Distributing or sublicensing any part of the platform that is licensed commercially without proper authorization.</li>
            <li>Modifying the software in ways that would violate its licensing terms or reverse-engineering its code.</li>
            <li>Using the content in a way that violates copyright, trademark, or other intellectual property rights.</li>
          </ul>
        </section>

        <section>
          <h2>5. How to Obtain a License</h2>
          <p>
            To obtain a commercial license or inquire about specific licensing terms, please contact our support team at <a href="mailto:support@cryptotracker.com">support@cryptotracker.com</a>.
          </p>
        </section>
        
        <section>
          <h2>6. Updates to Licensing Terms</h2>
          <p>
            CryptoTracker reserves the right to update or modify the licensing terms at any time. Users will be notified of significant changes via email or through a notice on the platform.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            For any questions or clarifications regarding our licensing terms, feel free to reach out to us at <a href="mailto:support@cryptotracker.com">support@cryptotracker.com</a>.
          </p>
        </section>
      </div>
    </>
  );
}

export default LicensingPage;
