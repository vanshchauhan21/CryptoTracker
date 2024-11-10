import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";

import axios from "axios";
import { setupContributorCardAnimations } from "../components/ContributorAnimation";
import "../components/ContributorAnimation/ContributorAnimation.css";

import ContributorCard from "../components/Common/Contributors Card/ContributorCard";

import "./Contributors.css";
import LottieSpinner from "../components/Common/LottieSpinner/LottieSpinner";

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 contributors
  const contributorsData = [
    { name: 'Contributor 1', description: 'Description for Contributor 1' },
    { name: 'Contributor 2', description: 'Description for Contributor 2' },
    { name: 'Contributor 3', description: 'Description for Contributor 3' },
    { name: 'Contributor 4', description: 'Description for Contributor 4' },
    { name: 'Contributor 5', description: 'Description for Contributor 5' },
    { name: 'Contributor 6', description: 'Description for Contributor 6' },
    { name: 'Contributor 7', description: 'Description for Contributor 7' },
    { name: 'Contributor 8', description: 'Description for Contributor 8' },
    { name: 'Contributor 9', description: 'Description for Contributor 9' },
    { name: 'Contributor 10', description: 'Description for Contributor 10' },
    { name: 'Contributor 11', description: 'Description for Contributor 11' },
    { name: 'Contributor 12', description: 'Description for Contributor 12' },
    { name: 'Contributor 13', description: 'Description for Contributor 13' },
    { name: 'Contributor 14', description: 'Description for Contributor 14' },
    { name: 'Contributor 15', description: 'Description for Contributor 15' },
    { name: 'Contributor 16', description: 'Description for Contributor 16' },
    { name: 'Contributor 17', description: 'Description for Contributor 17' },
    { name: 'Contributor 18', description: 'Description for Contributor 18' },
    { name: 'Contributor 19', description: 'Description for Contributor 19' },
    { name: 'Contributor 20', description: 'Description for Contributor 20' },
];
  const handleLoadMore = () => {
      setVisibleCount(prevCount => prevCount + 3); // Show 3 more contributors
  };

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

    const cleanup = setupContributorCardAnimations();


    return cleanup;

  }, [contributors]);


  if (loading) {
    return (
      <div className="loading-message">
        {/* <Header /> */}
        <LottieSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        {/* <Header /> */}
        <LottieSpinner />
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
            <div className="card-header">
              <div className="contributor-card">
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
                  {contributor.contributions} Contributions
                </p>
              </div>
              <div className="contributor-footer">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-profile-button"
                >
                  View Profile
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 dark:text-gray-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
            </div>

          ))
        ) : (

          <div className="spinner-container">
            <LottieSpinner />
          </div>

        )}
      </div>
      {visibleCount < contributorsData.length && (
                <button className="load-more-button" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
    </div>
  );
}

export default Contributors;
