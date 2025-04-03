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
            <li><a href="#home">Home</a></li>
            <li><a href="#comapre">Compare</a></li>
            <li><a href="#watchlists">Watchlist</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
          </ul>
        </div>

        {/* Market Data */}
        <div className="footer-section">
          <h4>Market Data</h4>
          <ul>
            <li><a href="https://www.google.com/finance/quote/BTC-USD">Bitcoin</a></li>
            <li><a href="https://www.google.com/finance/quote/ETC-USD">Ethereum</a></li>
            <li><a href="#altcoins">Altcoins</a></li>
            <li><a href="https://www.google.com/finance/quote/NFTM:OTCMKTS">NFT Market</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#news">Crypto News</a></li>
            <li><a href="#learn">Trading Guides</a></li>
            <li><a href="#learn">Price Charts</a></li>
            <li><a href="#security">Security Tips</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#termscondition">Terms of Use</a></li>
            <li><a href="#disclamer">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="footer-social-icons">
          <a href="#facbook"><FaFacebookF /></a>
          <a href="#twitter"><FaTwitter /></a>
          <a href="#instagram"><FaInstagram /></a>
          <a href="#linkedin"><FaLinkedin /></a>
          <a href="#youtube"><FaYoutube /></a>
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


