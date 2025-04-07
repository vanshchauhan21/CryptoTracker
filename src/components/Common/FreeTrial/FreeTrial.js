import React, { useEffect } from "react";
import "./FreeTrial.css";
import davidBanner from "../../../assets/Free-trial.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const FreeTrial = () => {
  const navigate = useNavigate();


  const handleStartTrialClick = () => {
    navigate('/pricing');
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="free-trial-container m-2 md:m-[2rem] " data-aos="fade-up">
      {/* David Banner Image */}
      <div className="david-banner" data-aos="fade-left">
        <img src={davidBanner} alt="David Banner" loading="lazy" className="w-[300px] md:w-[600px]" />
      </div>
      <div className="free-trial-content ">
        {/* Heading */}
        <div className="heading-wrapper" data-aos="fade-right">
          <h2 className="title">Go Premium for Free</h2>
        </div>

        {/* Benefits */}
        <div className="benefits  text-center" data-aos="fade-up" data-aos-delay="200">
          <Benefit text="Connect up to 100 portfolios" />
          <Benefit text="Track up to 100,000 transactions" />
          <Benefit text="View in-depth Profit & Loss analysis" />
          <Benefit text="Get AI-powered crypto price predictions" />
        </div>

        {/* Free Trial Button */}
        <button
          className="start-trial-btn"
          data-aos="zoom-in"
          data-aos-delay="400"
          onClick={handleStartTrialClick} // Add the click handler here
        >
          Start My Free Trial
        </button>
        <span
          className="plan-description  text-xs md:text-md"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          After your 7-day free trial, the Premium plan will be <br />
          as little as $13.99 per month 🍔
        </span>

        {/* Additional Info */}
        <div
          className="additional-info"
          data-aos="fade-in"
          data-aos-delay="800"
        >
          <div className="terms">
            <a
              href="/terms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Terms &amp; Conditions
            </a>
          </div>
          <span>·</span>
          <button className="cancel-button">Cancel Anytime</button>
        </div>
      </div>
    </div>
  );
};

// Reusable component for benefits
const Benefit = ({ text }) => (
  <div className="benefit" data-aos="fade-up" data-aos-delay="300">
    <svg
      width="24"
      height="30"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="11" r="10" fill="var(--e80Color)" />
      <path
        d="M18.3 8.67L10.6019 16.5L5.69995 11.514L6.85908 10.335L10.6019 14.142L17.1408 7.5L18.3 8.67Z"
        fill="var(--bgColor)"
      />
    </svg>
    <p className="benefit-content">{text}</p>
  </div>
);

export default FreeTrial;