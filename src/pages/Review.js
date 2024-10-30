
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";
const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      Name:"John Doe:",
      Star:"⭐⭐⭐⭐⭐",
      text: " ❝ CryptoTracker has been a game-changer for me. I can easily monitor all my favorite cryptocurrencies in real-time, and the user-friendly interface makes it simple to track my portfolio. Highly recommended!❞",
    },
    {
      id: 2,
      Name:"Jane Smith:",
      Star:"⭐⭐⭐⭐",
      text: " ❝I love the detailed insights and analytics CryptoTracker offers. It's perfect for staying on top of market trends. The notifications feature helps me make quick decisions on the go. Just wish there were a few more customization options.❞",
    },
    {
      id: 3,
      Name:"Alex Johnson:",
      Star:"⭐⭐⭐⭐⭐",
      text: "❝  As a newbie in crypto, CryptoTracker has made it so much easier to understand the market. The charts are super easy to read, and I feel more confident about my investments. This is a must-have tool for any crypto enthusiast! ❞",
    },
    {
      id: 4,
      Name:"Emily Davis:",
      Star:"⭐⭐⭐⭐⭐",
      text: " ❝ The accuracy and speed of CryptoTracker are unmatched. I love how it provides real-time data and alerts me whenever there's a significant market movement. It's my go-to tool for keeping up with the latest in the crypto world. ❞",
    },
    {
      id: 5,
      Name:"Michael Brown:",
      Star:"⭐⭐⭐⭐",
      text: " ❝CryptoTracker is fantastic! The market overview is comprehensive, and I really appreciate the news section that keeps me updated on the latest crypto trends. It would be even better if there were an app version!❞",
    },
    {
      id: 6,
      Name:"Sophia Williams:",
      Star:"⭐⭐⭐⭐⭐",
      text: " ❝ I’ve tried several crypto trackers, but none are as reliable as CryptoTracker. The platform is fast, and I appreciate the detailed performance analysis of different coins. It's my daily companion in crypto trading. ❞",
    },
    {
      id: 7,
      Name:"Daniel Lee:",
      Star:"⭐⭐⭐⭐",
      text: "❝CryptoTracker has improved my trading strategy. The historical data and price tracking features give me all the information I need at my fingertips. Would love to see a dark mode option for late-night trading sessions!❞",
    },
 
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 reviews at once
    slidesToScroll: 1, // Scroll one review at a time
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 review on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 reviews on tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="review-section">
      <h2 className="review-text">Our Users Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-content">
              <h3>{review.Name}</h3>
              <h3>{review.Star}</h3>
              <p>{review.text}</p>
              <p>{review.branch}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
