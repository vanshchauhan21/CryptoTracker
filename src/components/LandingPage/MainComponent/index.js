import React, { useEffect } from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

// import ProFreeSubcription from "../../../pages/Pro-Free-Subscribtion/ProFreeSubcription";

import Marquee from "../../../pages/Marquee/Marquee";
import OurVision from "../../Common/OurVision/OurVision";
import FreeTrial from "../../Common/FreeTrial/FreeTrial";
import InDepthAnalysis from "../../Common/InDepthAnalysis/InDepthAnalysis";
import LoveOurWebsiteCarousel from "../../LoveOurWebsite/LoveOurWebsiteCarousel";
import { AnalyticsTwoTone } from "@mui/icons-material";
import AnalyzeAssets from "../../../pages/AnalyzeAssets/AnalyzeAssets";

function MainComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-flex">
        <div className="info-landing" data-aos="fade-up">
          <h1 className="heading1 text-start ml-2">Real Time</h1>
          <motion.h1
            className="heading2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            Track Crypto
          </motion.h1>
          <motion.p
            className="info-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Track crypto through a public API in real time. Visit the dashboard
            to do so!
          </motion.p>
          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.75 }}
          >
            <a href="/dashboard">
              <Button text={"Dashboard"} />
            </a>
            <RWebShare
              data={{
                text: "CryptoDashboard made by Avi Vashishta using React JS.",
                url: "https://crypto-dashboard-jan.netlify.app",
                title: "CryptoTracker",
              }}
              onClick={() => toast.info("App Shared!")}
            >
              <Button text={"Share App"} outlined={true} />
            </RWebShare>
          </motion.div>
        </div>
        <div className="gradient-div" data-aos="fade-left">
          <img src={gradient} alt="some image" className="gradient" />
          <motion.img
            src={iphone}
            className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      {/* ...............Marquee................. */}
      <Marquee />
      {/* ...................Our Vision............. */}
      <OurVision />

      {/* .......................Free Trial............. */}
      <FreeTrial />

      {/* .............In-depth Analysis................... */}
      <InDepthAnalysis />
      {/* ...................Pro Free Subcription...........
      <ProFreeSubcription data-aos="fade-down" /> */}


      {/* ........................why do people love our website.......... */}
      <LoveOurWebsiteCarousel />
      {/* .............................AnalyzeAssets................. */}
      <AnalyzeAssets/>
    </div>
  );
}

export default MainComponent;
