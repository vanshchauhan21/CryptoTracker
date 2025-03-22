import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand">
          <h2>CryptoTracker</h2>
          <p>Your trusted cryptocurrency analysis tool.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Compare</a></li>
            <li><a href="#">Watchlist</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </div>

        {/* Market Data */}
        <div className="footer-section">
          <h4>Market Data</h4>
          <ul>
            <li><a href="#">Bitcoin</a></li>
            <li><a href="#">Ethereum</a></li>
            <li><a href="#">Altcoins</a></li>
            <li><a href="#">NFT Market</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Crypto News</a></li>
            <li><a href="#">Trading Guides</a></li>
            <li><a href="#">Price Charts</a></li>
            <li><a href="#">Security Tips</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="footer-social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 CryptoTracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


