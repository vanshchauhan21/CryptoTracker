import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";

import axios from "axios";

import ContributorCard from "../components/Common/Contributors Card/ContributorCard";

import "./Contributors.css";

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContributors() {
      let allContributors = [];
      let page = 1;

      try {
        while (true) {
          const response = await axios.get(
            `https://api.github.com/repos/vanshchauhan21/CryptoTracker/contributors`,
            {
              params: {
                per_page: 100,
                page,
              },
            }
          );
          const data = response.data;

          // Check GitHub rate limit
          const remaining = response.headers["x-ratelimit-remaining"];
          if (remaining === "0") {
            setError("Rate limit exceeded. Please try again later.");
            break;
          }

          if (data.length === 0) {
            break;
          }

          allContributors = [...allContributors, ...data];
          page++;
        }

        // Sort contributors by number of contributions
        allContributors.sort((a, b) => b.contributions - a.contributions);
        setContributors(allContributors);
      } catch (error) {
        console.error("Error fetching contributors:", error.message);
        setError("Failed to load contributors. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchContributors();
  }, []);

  if (loading) {
    return (
      <div className="loading-message">
        <Header />
        Loading contributors...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <Header />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="contributors-container">
      <Header />
      <h1 className="contributors-title">Our Contributors</h1>
      <div className="contributors-grid">
        {contributors.length > 0 ? (
          contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <a
                href={contributor.html_url}
                className="contributor-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  onError={(e) => {
                    e.target.src = "path/to/fallback_image.png";
                  }}
                  className="contributor-avatar"
                />
              </a>
              <h2 className="contributor-name">{contributor.login}</h2>
              <p className="contributor-contributions">
                Contributions: {contributor.contributions}
              </p>
            </div>
          ))
        ) : (
          <p>No contributors found.</p>
        )}
      </div>
    </div>
  );
}

export default Contributors;
