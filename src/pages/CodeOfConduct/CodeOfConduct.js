import React from 'react';
import Header from '../../components/Common/Header';
import './CodeOfConduct.css'; // Add a separate CSS file for styling

function CodeOfConduct() {
  return (
    <>
      <Header />
      <div className="code-of-conduct-container">
        <h1>Code of Conduct</h1>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            At CryptoTracker, we strive to foster a positive, inclusive, and respectful community for all users. This Code of Conduct outlines our expectations for behavior and interactions within the platform.
          </p>
        </section>
        
        <section>
          <h2>2. Respectful Communication</h2>
          <p>
            We value respectful communication and encourage everyone to engage in discussions in a considerate manner. Harassment, discrimination, or any form of toxic behavior is not tolerated.
          </p>
        </section>
        
        <section>
          <h2>3. Inclusivity</h2>
          <p>
            We are committed to creating a diverse and welcoming environment where everyone feels valued. We encourage participation from all individuals regardless of background, identity, or experience level.
          </p>
        </section>
        
        <section>
          <h2>4. Collaboration</h2>
          <p>
            Collaboration is essential for the success of our community. We encourage users to work together, share knowledge, and help each other achieve common goals.
          </p>
        </section>
        
        <section>
          <h2>5. No Harassment or Discrimination</h2>
          <p>
            Harassment or discrimination in any form, whether based on race, gender, sexual orientation, religion, or any other status, is strictly prohibited. We expect all users to act with dignity and respect towards each other.
          </p>
        </section>
        
        <section>
          <h2>6. Reporting Violations</h2>
          <p>
            If you encounter behavior that violates this Code of Conduct, please report it to the moderators immediately. We will take appropriate action to ensure a safe and respectful environment.
          </p>
        </section>
        
        <section>
          <h2>7. Consequences of Violations</h2>
          <p>
            Violations of the Code of Conduct may result in temporary or permanent suspension from the CryptoTracker platform, depending on the severity of the action.
          </p>
        </section>
        
        <section>
          <h2>8. Updates to the Code of Conduct</h2>
          <p>
            This Code of Conduct may be updated periodically to reflect changes in the community or platform guidelines. Users will be notified of significant updates.
          </p>
        </section>
      </div>
    </>
  );
}

export default CodeOfConduct;
