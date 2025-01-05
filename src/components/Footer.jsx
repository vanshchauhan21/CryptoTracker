import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerNavLinks = [
    {
      path: "/calculators/dollar-cost-averaging",
      label: "Dollar cost averaging Calculator",
    },
    {
      path: "/calculators/GasFreeEstimator",
      label: "Gas Free Estimator",
    },
  ];

  const socialMediaLinks = [
    {
      path: "https://www.facebook.com",
      icon: <FaFacebook />,
    },
    {
      path: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      path: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-nav">
        {footerNavLinks.map((link, index) => (
          <Link key={index} to={link.path} className="footer-link">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="footer-socials">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
