import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    content: "CryptoTracker has revolutionized how I manage my digital assets. The real-time updates and comprehensive analytics have helped me make informed decisions, leading to significant portfolio growth.",
    name: "Alex Johnson",
    role: "Crypto Investor",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    content: "As a day trader, the speed and accuracy of CryptoTracker are unparalleled. The customizable alerts have been a game-changer for my trading strategy.",
    name: "Sarah Lee",
    role: "Day Trader",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    content: "The educational resources on CryptoTracker have been invaluable for someone new to crypto like myself. I've learned so much and feel more confident in my investment choices.",
    name: "Mike Chen",
    role: "Novice Investor",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 4,
    content: "I manage multiple crypto portfolios, and CryptoTracker's multi-wallet support has made my job so much easier. It's a must-have tool for any serious crypto manager.",
    name: "Emily Rodriguez",
    role: "Portfolio Manager",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 5,
    content: "The tax reporting feature on CryptoTracker saved me hours of work during tax season. It's incredibly detailed and accurate - a lifesaver for crypto enthusiasts.",
    name: "David Patel",
    role: "Accountant & Crypto Enthusiast",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 6,
    content: "As a tech journalist, I've tested many crypto tracking apps, but CryptoTracker stands out for its user-friendly interface and comprehensive feature set. It's my go-to recommendation for readers.",
    name: "Lisa Zhang",
    role: "Tech Journalist",
    image: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    id: 7,
    content: "The API integration in CryptoTracker has allowed me to build custom tools on top of its robust platform. It's a developer's dream for creating crypto-related applications.",
    name: "Ryan O'Connor",
    role: "Blockchain Developer",
    image: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    id: 8,
    content: "CryptoTracker's security features give me peace of mind. The two-factor authentication and encrypted data storage show they take user security seriously.",
    name: "Amira Hassan",
    role: "Cybersecurity Analyst",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    adaptiveHeight: true,
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <FaQuoteRight className ="quote-icon" />
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div className="author-details">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;