import React from 'react';
import "./Marquee.css"
const companies = [
  { name: 'Coinbase', logo: 'https://simpleicons.org/icons/coinbase.svg', url: 'https://www.coinbase.com' },
  { name: 'Binance', logo: 'https://simpleicons.org/icons/binance.svg', url: 'https://www.binance.com' },
  { name: 'Ethereum', logo: 'https://simpleicons.org/icons/ethereum.svg', url: 'https://ethereum.org' },
  { name: 'Dogecoin', logo: 'https://simpleicons.org/icons/dogecoin.svg', url: 'https://dogecoin.com' },
  { name: 'Polkadot', logo: 'https://simpleicons.org/icons/polkadot.svg', url: 'https://polkadot.network' },
  { name: 'Litecoin', logo: 'https://simpleicons.org/icons/litecoin.svg', url: 'https://litecoin.org' },
  { name: 'Ripple', logo: 'https://simpleicons.org/icons/ripple.svg', url: 'https://ripple.com' },
  { name: 'Chainlink', logo: 'https://simpleicons.org/icons/chainlink.svg', url: 'https://chain.link' },
  { name: 'Cardano', logo: 'https://simpleicons.org/icons/cardano.svg', url: 'https://cardano.org' },
  { name: 'Solana', logo: 'https://simpleicons.org/icons/solana.svg', url: 'https://solana.com' },
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {/* Original logos */}
        {companies.map((company, index) => (
          <a key={index} href={company.url} target="_blank" rel="noopener noreferrer">
            <div className='company-logo-box'>

              <img src={company.logo} alt={company.name} className="logo" />
              <h5>{company.name}</h5>
            </div>
          </a>
        ))}
        {/* Duplicate logos for seamless scrolling */}
        {companies.map((company, index) => (
          <a key={`duplicate-${index}`} href={company.url} target="_blank" rel="noopener noreferrer">
            <div className='company-logo-box'>

              <img src={company.logo} alt={company.name} className="logo" />
              <h5>{company.name}</h5>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
