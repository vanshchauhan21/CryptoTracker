import React from 'react';
import './CryptoKnowledgeBase.css'; // Updated CSS file name

const CryptoKnowledgeBase = () => {
  return (
    <div className="crypto-knowledge-base-container"> {/* New unique class name */}
      <h2 className="crypto-knowledge-base-title">Crypto Knowledge Base</h2> {/* New unique class name */}
      <section className="crypto-knowledge-base-section"> {/* New unique class name */}
        <h3>What is Cryptocurrency?</h3>
        <p>
          Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central authority and is based on blockchain technology.
        </p>
      </section>
      <section className="crypto-knowledge-base-section"> {/* New unique class name */}
        <h3>How to Invest?</h3>
        <p>
          You can invest in cryptocurrencies through exchanges. Make sure to research and understand the risks involved.
        </p>
      </section>
      <section className="crypto-knowledge-base-section"> {/* New unique class name */}
        <h3>Understanding Blockchain</h3>
        <p>
          A blockchain is a decentralized digital ledger that records all transactions across a network of computers.
        </p>
      </section>
      <section className="crypto-knowledge-base-section"> {/* New unique class name */}
        <h3>Staying Safe</h3>
        <p>
          To keep your cryptocurrencies safe, use hardware wallets and enable two-factor authentication on exchanges.
        </p>
      </section>
      <section className="crypto-knowledge-base-section"> {/* New unique class name */}
        <h3>Tax Implications</h3>
        <p>
          It's important to understand the tax implications of cryptocurrency transactions in your jurisdiction. Always consult with a tax professional to ensure compliance.
        </p>
      </section>
    </div>
  );
};

export default CryptoKnowledgeBase;