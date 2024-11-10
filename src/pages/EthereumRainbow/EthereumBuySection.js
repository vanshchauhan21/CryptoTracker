import React from 'react';
import { motion } from 'framer-motion';
import './EthereumBuySection.css';
import bitcoinImage from '../../assets/ethereum-coin.png'; 

const BuyEthereumSection = () => {
  return (
    <section className="buy-ethereum-section">
      <div className="background-container">
        <motion.img 
          src={bitcoinImage}
          alt="Ethereum Investment" 
          className="background-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="gradient-overlay"></div>
      </div>
      <div className="content-wrapper">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Embrace the Future of Finance</h2>
          <p>Join the digital revolution with Ethereum. Secure, decentralized, and limitless potential.</p>
        </motion.div>
        <motion.div 
          className="features-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="feature-item">
            <i className="fas fa-lock"></i>
            <span>Secure & Decentralized</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-chart-line"></i>
            <span>High Growth Potential</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-globe"></i>
            <span>Global Accessibility</span>
          </div>
          <div className="feature-item">
            <i className="fas fa-shield-alt"></i>
            <span>Inflation Resistant</span>
          </div>
        </motion.div>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(58, 128, 233, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Ethereum Journey
        </motion.button>
      </div>
    </section>
  );
};

export default BuyEthereumSection;