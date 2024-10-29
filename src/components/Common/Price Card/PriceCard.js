// Card.js
import React from 'react';
import './PriceCard.css'; // Import your CSS file for Card styles
import { useTranslation } from 'react-i18next'; // Import useTranslation

function PriceCard({ title, price, description, features, isHighlighted }) {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className={`card ${isHighlighted ? 'highlighted' : ''}`}>
      <h3 className="card-title">{t(title)}</h3> {/* Translate title */}
      <p className="card-price">
        <span className="price">${price}</span>
        <span className="per-month">/{t('common.per_month')}</span> {/* Translate per month */}
      </p>
      <p className="card-description">{t(description)}</p> {/* Translate description */}
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="checkmark">✔</span>
            {t(feature)} {/* Translate feature */}
          </li>
        ))}
      </ul>
      <a href="#" className="card-button">{t('common.get_started_today')}</a> {/* Translate button text */}
    </div>
  );
}

export default PriceCard;
