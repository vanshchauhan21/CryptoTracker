import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Subscription added! 🎉");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="left">
          <div className="nav-icon">
            <img src={logo} alt="Logo" className="logo" />
            <p>CryptoTracker</p>
          </div>
          <div className="about-text">
            <h3>
              Stay updated with real-time crypto prices and trends. Track,
              compare, and make informed decisions with CryptoTracker
            </h3>
          </div>
        </div>
        {/* Right Section */}
        <div className="right">
          <div className="resources-row">
            <div className="resources first">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/compare">Compare</a>
                </li>
                <li>
                  <a href="/watchlist">Watchlist</a>
                </li>
                <li>
                  <a href=" /dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="resources second">
              <h3>Connect with us</h3>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
              </ul>
            </div>
            <div className="third">
              <h3>Subscribe to our Newsletter</h3>
              <h5 className="subscribe-text">
                Stay in the loop and subscribe to CryptoTracker's Newsletter
              </h5>
              <form className="search" onSubmit={handleSubscription}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  spellCheck="false"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
              {message && <p className="subscription-message">{message}</p>}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="foot">
        <p>&copy; 2024 CryptoTracker. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
