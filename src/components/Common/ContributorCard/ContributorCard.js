import React from "react";
import "./ContributorCard.css"; // CSS file for card styling

const ContributorCard = ({ avatarUrl, username, profileUrl }) => {
  return (
    <>

      <div className="contributor-card">

        <div className="avatar-container">
          <img src={avatarUrl} alt={username} className="avatar" />
        </div>
        <div className="card-content">
          <h2 className="username">{username}</h2>
          <p className="description">
            A key contributor helping us build this amazing platform.
          </p>
        </div>
        <div className="card-actions">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-button"
          >
            View Profile
          </a>
        </div>
      </div>
    </>

  );
};

export default ContributorCard;
