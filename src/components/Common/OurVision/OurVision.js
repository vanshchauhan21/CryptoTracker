import React, { useEffect } from "react";
import "./OurVision.css";
import logo from "../../../assets/logo-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="vision-container" data-aos="fade-up">
      <div style={{ display: "block" }}>
        <div style={{ opacity: 1, transform: "none" }} data-aos="fade-right">
          <h4 className="vision-heading">OUR VISION</h4>
        </div>
      </div>

      <div style={{ display: "block" }}>
        <div style={{ opacity: 1, transform: "none" }} data-aos="fade-left">
          <h2 className="vision-subheading">
            Cryptocurrency in
            <br /> Every Wallet™
          </h2>
        </div>
      </div>

      <div style={{ display: "block" }}>
        <div style={{ opacity: 1, transform: "none" }} data-aos="zoom-in">
          <div className="vision-logo-container">
            <img
              src={logo}
              alt="crypto-tracker-logo"
              loading="lazy"
              className="vision-logo"
            />
          </div>
        </div>
      </div>

      <div className="fund-container items-center" data-aos="fade-up">
        <div className="fund-date" data-aos="fade-up">
          <span>Funded in </span>
          <p>Oct-2024</p>
        </div>
        <div className="user" data-aos="fade-up" data-aos-delay="200">
          <span>Users</span>
          <p>1M</p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
