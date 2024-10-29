import React, { useEffect, useState } from "react";

import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import ContributorCard from "../components/Common/Contributors Card/ContributorCard";
import "./Contributors.css";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/vanshchauhan21/CryptoTracker/contributors"
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributors();
  }, []);


  return (
    <div className="contributors-page">

      <Header />
      <h1 >Project Contributors</h1>
      {
       isLoading?(<Loader />):(
        <div className="contributors-list">
        {contributors.map((contributor) => (
          <ContributorCard
            key={contributor.id}
            avatarUrl={contributor.avatar_url}
            username={contributor.login}
            profileUrl={contributor.html_url}
          />
        ))}
      </div>
       )
      }

    </div>
  );
};

export default Contributors;