// Pricing.js
import React from 'react';
import PriceCard from '../components/Common/Price Card/PriceCard';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import "../App.css"
import Header from '../components/Common/Header';

function Pricing() {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className="pricing-container">
      <Header />
      <div className="card-container">
        <PriceCard
          title={t('pricing.hobby_title')} // Translate title
          price="29"
          description={t('pricing.hobby_description')} // Translate description
          features={[
            t('pricing.hobby_feature_1'),
            t('pricing.hobby_feature_2'),
            t('pricing.hobby_feature_3'),
            t('pricing.hobby_feature_4'),
          ]}
        />
        <PriceCard
          title={t('pricing.enterprise_title')} // Translate title
          price="99"
          description={t('pricing.enterprise_description')} // Translate description
          features={[
            t('pricing.enterprise_feature_1'),
            t('pricing.enterprise_feature_2'),
            t('pricing.enterprise_feature_3'),
            t('pricing.enterprise_feature_4'),
          ]}
          isHighlighted
        />
      </div>
    </div>
  );
}

export default Pricing;
