import React, { useEffect, useState } from "react";
import Header from "./Common/Header";
import "./Learn.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  const categories = ["Technology", "Sports", "Health", "Business"];

  const fetchNews = async (query = "cryptocurrency", category = "") => {
    try {
      setLoading(true);
      const response = await axios.get(
        https://newsapi.org/v2/everything?q=${query}&category=${category}&page=${page}&apiKey=206898f0e3034af5b00226829c13f102
      );
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  const handleSearch = async () => {
    fetchNews(searchTerm);
  };

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    fetchNews(searchTerm, category.toLowerCase());
  };

  const handle setPage(page + 1);
  const handlePrevPage = () => setPage(Math.max(1, page - 1));

  const handleFavorite = (article) => {
    setFavorites([...favorites, article]);
  };

  if (loading) {
    return (
      <div className="loader"></div>
    );
  }

  return (
    <>
      <Header />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="category-container">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <button onClick={() => handleFavorite(article)}>
              Save to Favorites
            </button>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <button onClick={handlePrevPage}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <div className="favorites-container">
        <h2>Favorites</h2>
        {favorites.map((fav, index) => (
          <div key={index} className="news-article">
            <h2>{fav.title}</h2>
            <p>{fav.description}</p>
            <a href={fav.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;