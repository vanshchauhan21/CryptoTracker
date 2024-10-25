import React, { useState } from "react";
import { ArrowRight, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.jpg";
import "./ComparePage/SelectCoins/index";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thanks for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  
  const DiscordIcon = ({ size = 20 }) => (
    <i 
      className="fab fa-discord" 
      style={{ 
        fontSize: size,
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} 
    />
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content-wrapper">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo">
                <img src={logo} alt="Logo" className="logo" />
              </div>
              <h2 className="brand-name">CryptoTracker</h2>
            </div>
            <p className="brand-description">
              Stay updated with real-time crypto prices and trends. Track,
              compare, and make informed decisions with CryptoTracker.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="footer-content">
            {/* Quick Links Section */}
            <div className="footer-section">
              <h3 className="section-title">Quick Links</h3>
              <ul className="link-list">
                <li>
                  <a href="/">
                    <ArrowRight size={16} />
                    Home
                  </a>
                </li>
                <li>
                  <a href="/compare">
                    <ArrowRight size={16} />
                    Compare
                  </a>
                </li>
                <li>
                  <a href="/watchlist">
                    <ArrowRight size={16} />
                    Watchlist
                  </a>
                </li>
                <li>
                  <a href="/dashboard">
                    <ArrowRight size={16} />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy">
                    <ArrowRight size={16} />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions">
                    <ArrowRight size={16} />
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="/faq">
                    <ArrowRight size={16} />
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="footer-section">
              <h3 className="section-title">Connect with us</h3>
              <div className="social-icons">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Github, label: "Github" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: DiscordIcon, label: "Discord" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="social-icon"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section newsletter-section">
              <h3 className="section-title">Newsletter</h3>
              <p className="newsletter-description">
                Stay in the loop and subscribe to CryptoTracker's Newsletter
              </p>
              <form onSubmit={handleSubscription}>
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                    spellCheck="false"
                  />
                  <button type="submit" className="submit-button">
                    Subscribe <ArrowRight size={16} />
                  </button>
                </div>
                {message && <p className="subscription-message">{message}</p>}
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-divider" />
          <p className="copyright-text">© 2024 CryptoTracker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;