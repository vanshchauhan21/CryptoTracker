import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiDogecoin, SiLitecoin } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Animated crypto particles background */}
      <div className="crypto-particles">
        <FaBitcoin className="particle btc" />
        <FaEthereum className="particle eth" />
        <SiDogecoin className="particle doge" />
        <SiLitecoin className="particle ltc" />
      </div>

      {/* 3D Glow Edge */}
      <div className="footer-glow-edge"></div>

      <div className="footer-container">
        {/* Brand Section with 3D tilt effect */}
        <motion.div 
          className="brand-section"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="brand">
            <h2>
              <span className="gradient-text">Crypto</span>
              <span className="gradient-text-alt">Tracker</span>
            </h2>
            <div className="brand-underline"></div>
          </div>
          <p className="brand-tagline">
            Your trusted source for cryptocurrency data and analysis.
          </p>
        </motion.div>

        {/* Links Grid with floating animation */}
        <div className="links-grid">
          <motion.div 
            className="links-column"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="column-title">Quick Links</h3>
            <div className="links-list">
              <motion.a 
                href="#home" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Home</span>
              </motion.a>
              <motion.a 
                href="#compare" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Compare</span>
              </motion.a>
              <motion.a 
                href="#watchlists" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Watchlist</span>
              </motion.a>
              <motion.a 
                href="#dashboard" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Dashboard</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="links-column"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="column-title">Market Data</h3>
            <div className="links-list">
              <motion.a 
                href="https://www.google.com/finance/quote/BTC-USD" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Bitcoin</span>
              </motion.a>
              <motion.a 
                href="https://www.google.com/finance/quote/ETC-USD" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Ethereum</span>
              </motion.a>
              <motion.a 
                href="#altcoins" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Altcoins</span>
              </motion.a>
              <motion.a 
                href="https://www.google.com/finance/quote/NFTM:OTCMKTS" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>NFT Market</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="links-column"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="column-title">Resources</h3>
            <div className="links-list">
              <motion.a 
                href="#news" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Crypto News</span>
              </motion.a>
              <motion.a 
                href="#learn" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Trading Guides</span>
              </motion.a>
              <motion.a 
                href="#charts" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Price Charts</span>
              </motion.a>
              <motion.a 
                href="#security" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Security Tips</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="links-column"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="column-title">Policies</h3>
            <div className="links-list">
              <motion.a 
                href="#privacy" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Privacy Policy</span>
              </motion.a>
              <motion.a 
                href="#terms" 
                className="nav-link"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="link-arrow">→</span>
                <span>Terms of Use</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Link to="/disclaimer" className="nav-link">
                  <span className="link-arrow">→</span>
                  <span>Disclaimer</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Media with 3D flip effect */}
        <div className="social-section">
          <h3 className="social-title">Follow Us</h3>
          <div className="social-icons">
            <motion.a 
              href="#facebook" 
              className="social-icon"
              whileHover={{ y: -5, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaFacebookF className="icon-front" />
              <span className="icon-back">f</span>
            </motion.a>
            <motion.a 
              href="#twitter" 
              className="social-icon"
              whileHover={{ y: -5, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTwitter className="icon-front" />
              <span className="icon-back">𝕏</span>
            </motion.a>
            <motion.a 
              href="#instagram" 
              className="social-icon"
              whileHover={{ y: -5, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInstagram className="icon-front" />
              <span className="icon-back">IG</span>
            </motion.a>
            <motion.a 
              href="#linkedin" 
              className="social-icon"
              whileHover={{ y: -5, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin className="icon-front" />
              <span className="icon-back">in</span>
            </motion.a>
            <motion.a 
              href="#youtube" 
              className="social-icon"
              whileHover={{ y: -5, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaYoutube className="icon-front" />
              <span className="icon-back">▶</span>
            </motion.a>
          </div>
        </div>

        {/* Copyright with animated crypto icons */}
        <div className="copyright-section">
          <div className="crypto-icons">
            <motion.div
              className="crypto-icon"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaBitcoin />
            </motion.div>
            <motion.div
              className="crypto-icon"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            >
              <FaEthereum />
            </motion.div>
            <motion.div
              className="crypto-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
            >
              <SiDogecoin />
            </motion.div>
          </div>
          <p className="copyright-text">
            © 2025 CryptoTracker. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;