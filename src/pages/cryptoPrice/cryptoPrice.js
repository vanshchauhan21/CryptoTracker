// Import necessary libraries and components
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cryptPrice.css';
import Header from "../../components/Common/Header";

const CryptoPrices = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [filteredCryptocurrencies, setFilteredCryptocurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const coinsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get('https://api.coinpaprika.com/v1/tickers');
        setCryptocurrencies(response.data);
        setFilteredCryptocurrencies(response.data);
      } catch (error) {
        console.log('Error fetching cryptocurrencies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptocurrencies();
  }, []);

  const handleNextPage = () => {
    if ((currentPage + 1) * coinsPerPage < filteredCryptocurrencies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredCoins = cryptocurrencies.filter(coin =>
      coin.name.toLowerCase().includes(value) ||
      coin.symbol.toLowerCase().includes(value)
    );
    setFilteredCryptocurrencies(filteredCoins);
    setCurrentPage(0);
  };

  // Slice the filtered cryptocurrencies array to get the current page's coins
  const displayedCoins = filteredCryptocurrencies.slice(currentPage * coinsPerPage, (currentPage + 1) * coinsPerPage);

  return (
    <div>
      <Header />
      <div className="crypto-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a cryptocurrency..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="crypto-grid">
              {displayedCoins.map((coin, index) => (
                <div className="crypto-card" key={index}>
                  <h3 className="crypto-name">{coin.name} ({coin.symbol})</h3>
                  <p className="crypto-price">Price: ${coin.quotes.USD.price.toFixed(2)}</p>
                  <p className="crypto-change">24h Change: {coin.quotes.USD.percent_change_24h}%</p>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                Previous
              </button>
              <button onClick={handleNextPage} disabled={(currentPage + 1) * coinsPerPage >= filteredCryptocurrencies.length}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoPrices;
