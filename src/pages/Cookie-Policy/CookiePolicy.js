import React from "react";
import "./CookiePolicy.css"; // Ensure you create a CSS file for styling
import Header from "../../components/Common/Header";

function CookiePolicy() {
  return (
    <>
      <Header />
      <div className="cookie-policy">
        <h1>Cookie Privacy Policy</h1>
        <p>
          At CryptoTracker, we value your privacy. This Cookie Privacy Policy
          explains what cookies are, how we use cookies, how third-parties we
          may partner with may use cookies on the service, your choices
          regarding cookies, and further information about cookies.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are used to store small pieces of
          information. They are stored on your device when the website is
          loaded on your browser. These cookies help us make the website
          function properly, make it more secure, provide better user
          experience, and understand how the website performs and to analyze
          what works and where it needs improvement.
        </p>

        <h2>How CryptoTracker Uses Cookies</h2>
        <p>
          When you use and access the service, we may place a number of cookies
          files in your web browser. We use cookies for the following purposes:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> We use cookies to remember
            information that changes the way the service behaves or looks,
            such as a user's language preference on the service.
          </li>
          <li>
            <strong>Account-Related Cookies:</strong> We use cookies to manage
            the signup process and general administration. These cookies will
            usually be deleted when you log out; however, in some cases, they
            may remain afterward to remember your site preferences when logged
            out.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> We use cookies to help us
            analyze how our visitors use the website and to monitor website
            performance.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> We may use cookies to serve
            you with advertisements that are relevant to you and your interests.
          </li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the service and deliver
          advertisements on and through the service.
        </p>

        <h2>Your Choices Regarding Cookies</h2>
        <p>
          If you'd prefer to avoid the use of cookies on the website, you
          must first disable the use of cookies in your browser and then delete
          the cookies saved in your browser associated with this website. You
          may use this option for preventing the use of cookies at any time.
        </p>

        <h2>More Information About Cookies</h2>
        <p>
          You can learn more about cookies and the following third-party
          websites:
        </p>
        <ul>
          <li>
            <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">
              AllAboutCookies
            </a>
          </li>
          <li>
            <a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
              Network Advertising Initiative
            </a>
          </li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our cookie policy, please contact us
          at{" "}
          <a href="mailto:support@cryptotracker.com">
            support@cryptotracker.com
          </a>
        </p>
      </div>
    </>
  );
}

export default CookiePolicy;
