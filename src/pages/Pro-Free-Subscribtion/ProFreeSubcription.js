// src/pages/ProFreeSubscription.js

import React from 'react';
import './ProFreeSubscription.css';

const ProFreeSubscription = () => {
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

    return (
        <div className="pricing-container">
            {pricingPlans.map((plan, index) => (
                <div key={index} className={`price-card ${plan.title === 'PRO' ? 'highlighted' : ''}`}>
                    <h2 className="price-card-title">{plan.title}</h2>
                    <p className="price-card-price">{plan.price}</p>
                    <ul className="price-card-features">
                        {plan.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProFreeSubscription;
