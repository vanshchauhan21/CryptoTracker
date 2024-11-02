// ProFreeSubscription.js
import React from 'react';
import PropTypes from 'prop-types';
import PriceCard from '../../components/Common/Price Card/PriceCard';
import "./ProFreeSubscription.css";

const pricingPlans = [
    {
        title: 'Basic',
        price: 'Free',
        features: ['Portfolio insights (Limited Modules)', 'No subscription'],
    },
    {
        title: 'PRO',
        price: '$13.99',
        features: [
            'Full Access',
            'Exchange, wallet & broker connections (Max. 2)',
            'Auto-refreshing prices',
            'Multi-device syncing (2 devices)',
            'Extended hours',
            'Insider moves',
            'Monochrome mode',
            'Exclusive early access',
        ],
    },
    {
        title: 'Lifetime PRO',
        price: '$499.99',
        features: [
            'Full Access',
            'Unlimited connections',
            'Auto-refreshing prices',
            'Multi-device syncing (Unlimited)',
            'Extended hours',
            'Insider moves',
            'Monochrome mode',
            'Exclusive early access',
        ],
    },
];

const ProFreeSubscription = () => {
    return (
        <div className="pricing-container">
            {pricingPlans.map((plan, index) => (
                <PriceCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    isHighlighted={plan.title === 'PRO'}
                />
            ))}
        </div>
    );
};

// PropTypes for extra validation
ProFreeSubscription.propTypes = {
    pricingPlans: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            features: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ),
};

export default ProFreeSubscription;
