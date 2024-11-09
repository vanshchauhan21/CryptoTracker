import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoNews.css';
import Header from "../../components/Common/Header";
import LottieSpinner from '../../components/Common/LottieSpinner/LottieSpinner';

const CryptoNews = () => {
  const [trendingCoins, setTrendingCoins] = useState({});
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 9;

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/global');
        setTrendingCoins(response.data.data);
      } catch (error) {
        console.log('Error fetching trending coins:', error);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get('https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining');
        setNews(response.data.Data); // Adjusted to match the provided JSON structure
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchTrendingCoins(), fetchNews()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleNextPage = () => {
    if ((currentPage + 1) * articlesPerPage < news.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <>
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <LottieSpinner />
      </div>
      </>

    )
  }

  // Slice the news array to get the current page articles
  const displayedNews = news.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage);

  return (
    <div>
      <Header />
      <div className="trending-container">
        {loading ? (

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LottieSpinner />
          </div>
        ) : (
          <>
            <div className="news-grid">
              {displayedNews.map((article, index) => (
                <div className="news-card" key={index}>
                  {article.imageurl && (
                    <img src={article.imageurl} alt={article.title} className="news-image" />
                  )}
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-description">
                    {article.body.split(" ").length > 10
                      ? `${article.body.split(" ").slice(0, 10).join(" ")}...`
                      : article.body}
                  </p>
                  <button href={article.url} target="_blank" rel="noopener noreferrer" className="news-button">
                    Read more on
                  </button>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                Previous
              </button>
              <button onClick={handleNextPage} disabled={(currentPage + 1) * articlesPerPage >= news.length}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoNews;
