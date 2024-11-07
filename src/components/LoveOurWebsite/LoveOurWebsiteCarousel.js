import React from 'react';
import './LoveOurWebsiteCarousel.css';

const LoveOurWebsiteCarousel = () => {
  const reasons = [
    {
      title: "User-Friendly Interface",
      description: "Our website provides an intuitive and easy-to-navigate interface that enhances user experience."
    },
    {
      title: "Fast and Reliable",
      description: "We prioritize speed and reliability so you can enjoy a seamless browsing experience."
    },
    {
      title: "Great Community Support",
      description: "Our community of users is always ready to help and share knowledge."
    },
    {
      title: "Exclusive Features",
      description: "Our platform offers unique features that can't be found anywhere else."
    }
  ];

  return (
    <div className="carousel-container">
      <h2>Why Do People Love Our Website?</h2>
      <div className="carousel">
        {reasons.map((reason, index) => (
          <div className="carousel-card" key={index}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveOurWebsiteCarousel;
