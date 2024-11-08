
import React, { useState } from 'react';
import Header from '../../components/Common/Header';
import { 
  DataUsage, 
  Calculate, 
  Security, 
  Timeline, 
  LocalLibrary, 
  ImportExport,
  VerifiedUser,
  CloudSync,
  Analytics,
  SupportAgent
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import './Methodology.css';

const MethodologySection = ({ icon, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={`methodology-card ${isExpanded ? 'expanded' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="methodology-card-header">
        {icon}
        <h2>{title}</h2>
        <span className="expand-icon">
          {isExpanded ? '−' : '+'}
        </span>
      </div>
      {isExpanded && (
        <motion.div 
          className="methodology-card-content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

const Methodology = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="methodology-tab-content">
            <h2>Comprehensive Cryptocurrency Tracking Methodology</h2>
            <p>
              At CryptoTracker, we pride ourselves on delivering the most accurate, 
              transparent, and comprehensive cryptocurrency data analysis in the market.
            </p>
            <div className="methodology-highlights">
              <div className="highlight-item">
                <VerifiedUser className="highlight-icon" />
                <h3>Verified Sources</h3>
                <p>100+ Cryptocurrency Exchanges</p>
              </div>
              <div className="highlight-item">
                <CloudSync className="highlight-icon" />
                <h3>Real-Time Updates</h3>
                <p>Data refreshed every 15 seconds</p>
              </div>
              <div className="highlight-item">
                <Analytics className="highlight-icon" />
                <h3>Advanced Analytics</h3>
                <p>Machine Learning Powered Insights</p>
              </div>
            </div>
          </div>
        );
      case 'data-sources':
        return (
          <div className="methodology-tab-content">
            <h2>Data Sources Breakdown</h2>
            <div className="data-sources-grid">
              <div className="data-source-card">
                {/* <img src="/path/to/coingecko-logo.png" alt="CoinGecko" /> */}
                <h3>CoinGecko</h3>
                <p>Primary Cryptocurrency Data Provider</p>
              </div>
              <div className="data-source-card">
                {/* <img src="/path/to/coinmarketcap-logo.png" alt="CoinMarketCap" /> */}
                <h3>CoinMarketCap</h3>
                <p>Global Cryptocurrency Market Data</p>
              </div>
              <div className="data-source-card">
                {/* <img src="/path/to/binance-logo.png" alt="Binance" /> */}
                <h3>Binance API</h3>
                <p>Real-Time Trading Information</p>
              </div>
            </div>
          </div>
        );
      case 'calculation-methods':
        return (
          <div className="methodology-tab-content">
            <h2>Advanced Calculation Methodologies</h2>
            <div className="calculation-methods">
              <div className="calculation-method">
                <h3>Volume Weighted Average Price (VWAP)</h3>
                <code>VWAP = Σ(Price * Volume) / Σ(Volume)</code>
                <p>
                  A precise method that considers trading volume across 
                  multiple exchanges to determine the most accurate price.
                </p>
              </div>
              <div className="calculation-method">
                <h3>Market Capitalization</h3>
                <code>Market Cap = Current Price * Circulating Supply</code>
                <p>
                  Calculated using the most recent price and verified 
                  circulating supply from multiple sources.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="methodology-page">
      <Header />
      <div className="methodology-container">
        <motion.div 
          className="methodology-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>CryptoTracker Methodology</h1>
          <p>
            Empowering investors with transparent, accurate, and 
            real-time cryptocurrency insights
          </p>
        </motion.div>

        <div className="methodology-tabs">
          <button 
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={activeTab === 'data-sources' ? 'active' : ''}
            onClick={() => setActiveTab('data-sources')}
          >
            Data Sources
          </button>
          <button 
            className={activeTab === 'calculation-methods' ? 'active' : ''}
            onClick={() => setActiveTab('calculation-methods')}
          >
            Calculation Methods
          </button>
        </div>

        <div className="methodology-tab-container">
          {renderTabContent()}
        </div>

        <div className="methodology-grid">
          <MethodologySection 
            icon={<DataUsage className="methodology-icon" />}
            title="Data Collection"
          >
            <div className="methodology-content">
              <h3>Comprehensive Data Aggregation</h3>
              <ul>
                <li>
                  <strong>Multi-Source Verification:</strong>
                  <p>Cross-referencing data from 100+ exchanges</p>
                </li>
                <li>
                  <strong>Real-Time Data Processing:</strong>
                  <p>Advanced algorithms for instant data updates</p>
                </li>
              </ul>
            </div>
          </MethodologySection>

          <MethodologySection 
            icon={<Security className="methodology-icon" />}
            title="Data Security"
          >
            <div className="methodology-content">
              <h3>Robust Security Framework</h3>
              <div className="security-features">
                <div className="security-feature">
                  <VerifiedUser className="security-icon" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="security-feature">
                  <SupportAgent className="security-icon" />
                  <span>Regular Security Audits</span>
                </div>
              </div>
            </div>
          </MethodologySection>
        </div>

        <div className="methodology-disclaimer">
          <LocalLibrary className="disclaimer-icon" />
          <div>
            <h3>Important Disclaimer</h3>
            <p>
              The information provided is for educational purposes only. CryptoTracker is not a financial advisor. Always conduct your own research and consult with a professional before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;