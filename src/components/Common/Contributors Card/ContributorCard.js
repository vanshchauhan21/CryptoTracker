import React from "react";
import "./ContributorCard.css"; // CSS file for card styling
import { useTranslation } from "react-i18next";

const ContributorCard = ({ avatarUrl, username, profileUrl }) => {
  const { t } = useTranslation();

  return (
    <>

      <div className="contributor-card">

        <div className="avatar-container">
          <img src={avatarUrl} alt={username} className="avatar" />
        </div>
        <div className="card-content">
          <h2 className="username">{username}</h2>
          <p className="description">
          {t('contributor_card.description')}
          </p>
        </div>
        <div className="card-actions">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-button"
          >
         {t('contributor_card.view_profile')}
          </a>
        </div>
      </div>
    </>

  );
};

export default ContributorCard;