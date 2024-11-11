import React from 'react';
import './ManagePortfolio.css';

import imgPortfolio from '../../assets/portfolio.avif';
const ManagePortfolio = () => {
    return (
        <div className="manage-portfolio">
            <div className="manage-portfolio__heading-wrapper">
                <div className="manage-portfolio__title-container">
                    <h3 className="manage-portfolio__title">
                        Start Managing Your Crypto Portfolio <br />
                        <b>More Efficiently</b>
                    </h3>
                </div>
            </div>
            <button
                type="button"
                className="manage-portfolio__get-started-button"
                aria-label="Get Started"
            >
                Get Started
            </button>
            <div className="manage-portfolio__banner">
                <picture>

                    <img
                        src={imgPortfolio}
                        loading="lazy"
                        alt="Manage Portfolio Banner"
                    />
                </picture>
            </div>
        </div>
    );
};

export default ManagePortfolio;
