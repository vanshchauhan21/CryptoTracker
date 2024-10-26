import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
const Review = () => {
  const reviews = [
    {
      id: 1,
      name:"John Doe:",
      star:"⭐⭐⭐⭐⭐",
      text: " ❝ CryptoTracker has been a game-changer for me. I can easily monitor all my favorite cryptocurrencies in real-time, and the user-friendly interface makes it simple to track my portfolio. Highly recommended! ❞",
    },
    {
      id: 2,
      name:"Alex Johnson:",
      star:"⭐⭐⭐⭐⭐",
      text: " ❝ As a newbie in crypto, CryptoTracker has made it so much easier to understand the market. The charts are super easy to read, and I feel more confident about my investments. This is a must-have tool for any crypto enthusiast! ❞",
    },
    {
      id: 3,
      name:"Jane Smith:",
      star:"⭐⭐⭐⭐",
      text: "❝  I love the detailed insights and analytics CryptoTracker offers. It's perfect for staying on top of market trends. The notifications feature helps me make quick decisions on the go. Just wish there were a few more customization options  ❞",
    },
    {
      id: 4,
      name:"Emily Davis:",
      star:"⭐⭐⭐⭐⭐",
      text: " ❝ The accuracy and speed of CryptoTracker are unmatched. I love how it provides real-time data and alerts me whenever there's a significant market movement. It's my go-to tool for keeping up with the latest in the crypto world.❞",
    },
    {
      id: 5,
      name:"Michael Brown:",
      star:"⭐⭐⭐⭐",
      text: " ❝ CryptoTracker is fantastic! The market overview is comprehensive, and I really appreciate the news section that keeps me updated on the latest crypto trends. It would be even better if there were an app version!❞",
    },
    {
      id: 6,
      name:"Sophia Williams:",
      star:"⭐⭐⭐⭐⭐",
      text: " ❝ I’ve tried several crypto trackers, but none are as reliable as CryptoTracker. The platform is fast, and I appreciate the detailed performance analysis of different coins. It's my daily companion in crypto trading. ❞",
    },
    {
      id: 7,
      name:"Olivia Martinez:",
      star:"⭐⭐⭐⭐⭐",
      text: " ❝ Tracking my portfolio across multiple exchanges was always a hassle until I found CryptoTracker. Now, I can keep an eye on everything in one place. The clean design and seamless experience make it the best tool out there. ❞",
    },
    {
      id: 8,
      name:"James Wilson:",
      star:"⭐⭐⭐⭐⭐",
      text: " ❝ CryptoTracker helps me stay ahead of the game. The advanced charting tools are perfect for both beginners and pros, and I love the feature that compares multiple coins at once. This site is indispensable for crypto traders! ❞",
    },
    
    {
      id: 9,
      name:"Daniel Lee:",
      star:"⭐⭐⭐⭐",
      text: " ❝ CryptoTracker has improved my trading strategy. The historical data and price tracking features give me all the information I need at my fingertips. Would love to see a dark mode option for late-night trading sessions! ❞",
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
      <h2 className="review-text">Our Customers Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-content">
              <h3>{review.name}</h3>
              <p>{review.star}</p>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
