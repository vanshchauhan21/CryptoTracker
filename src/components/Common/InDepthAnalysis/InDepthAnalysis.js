import React, { useEffect } from "react";
import "./InDepthAnalysis.css";
import profitLoss from "../../../assets/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const InDepthAnalysis = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms duration for animations
  }, []);

  return (
    <div className="tutorial mx-0 md:m-[2rem] " data-aos="fade-up">
      <div className="tutorial-description" data-aos="fade-right">
        {/* Text Content */}
        <div className="heading-wrapper ">
          <h2 className="title md:text-[1.8em] w-[50%] md:w-full">
            Get In-Depth Profit &amp; Loss Analysis
          </h2>
          <p className="description max-w-xs md:max-w-lg   md:text-[1em]   m-16" data-aos="fade-in" data-aos-delay="200">
            Connect your wallet to get 24h, daily, weekly, and cumulative Profit
            &amp; Loss analysis. Level up your crypto investing strategy.
          </p>
          <button className="connect-button" data-aos="zoom-in" data-aos-delay="400">
            Connect Portfolio
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="tutorial-banner" data-aos="fade-left" data-aos-delay="600">
        <video
          className="background-video w-[300px] md:w-[600px]"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          poster="/static/images/onboarding/profit-loss-banner.webp"
        >
          <source src={profitLoss} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default InDepthAnalysis;