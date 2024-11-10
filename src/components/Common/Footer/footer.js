import React from "react";
import "./styles.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from 'react-router-dom';

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://linkedin.com/in/vanshchauhan21">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="mailto:chauhanvansh313@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/VanshChauh12028">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
