import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { ArrowRight } from 'react-feather';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
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
      updated-navbar
      <Toaster></Toaster>
      {/* .................1 links-section............... */}

    
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="section-title">{t("Explore")}</h3>
          <ul className="link-list">
            {[
              { path: "/", label: "Home" },
              { path: "/aboutus", label: "About Us" },
              { path: "/compare", label: "Compare" },
              { path: "/watchlist", label: "Watchlist" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/Porfolio", label: "Portfolio" },

              { path: "/blog", label: "Blog" },

              { path: "/earn", label: "Earn" },
              { path: "/ultimate-crypto-portfolio-tracker", label: "Ultimate Crypto Portfolio Tracker" },


              // { path: "/#", label: "Earn" },
              // { path: "/crypto-blog", label: "Blog" },


              // { path: "/earn", label: "Earn" },

              // { path: "/earn", label: "Earn" },

              // { path: "/#", label: "Blog" },

              { path: "/faq", label: "FAQ" },
              { path: "/pricing", label: "Pricing" },
              { path: "/contributors", label: "Contributors" },
              { path: "/crypto-quiz", label: "Cryptocurrency Quiz" },

              { path: "/affiliate-program", label: "Affiliate Program" },

              { path: "Sitemap", label: "Site map" },
              { path: "/cosmos", label: "Cosmos Wallet Tracker"}

            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      

        {/* .....................................2...................... */}

        <div className="footer-section">
          <h3 className="section-title">{t("Useful Tools")}</h3>
          <ul className="link-list">
            {[
              {
                path: "/calculators/crypto-profit-calculator",
                label: "Crypto Profit Calculator",
              },
              {
                path: "/calculators/profit-return-calculator",
                label: "Profit Return Calculator",
              },
              {
                path: "/calculators/BreakEvenCalculator",
                label: "BreakEvenCalculator",
              },
              {
                path: "/calculators/SlippageCalculator",
                label: "SlippageCalculator",
              },
              {
                path: "/calculators/ROICalculator",
                label: "ROICalculator",
              },
              {
                path: "/calculators/investment-return-calculator",
                label: "Investment Return Calculator",
              },
              {
                path: "/calculators/PercentageChangeCalculator",
                label: "PercentageChangeCalculator",
              },
              {
                path: "/calculators/SIPCalculator",
                label: "SIPCalculator",
              },
              {
                path: "/calculators/impermanent-loss-calculator",
                label: "Impermanent Loss Calculator",
              },
              {
                path: "/calculators/dollar-cost-averaging",
                label: "Dollar cost averaging Calculator",
              },
              {
                path: "/calculators/GasFreeEstimator",
                label: "Gas Free Estimator",
              },
              
              {
                path: "/calculators/crypto-converter",
                label: "Crypto Converter",
              },
              {
                path: "/calculators/DefiCalculator",
                label: "DeFi Yield Estimator",
              },
              {
                path: "/calculators/CompoundInterestCalculator",
                label: "CompoundInterestCalculator",
              },
              {
                path: "/calculators/InterestRateChangeEstimator",
                label: "Interest Rate Change Estimator",
              },
              {
                path: "/calculators/ICOIDOPerformanceTracker ",
                label: "ICO/IDO Performance Tracker",
              },
              {
                path: "/calculators/CrossChainBridgeFeeOptimizer",
                label: "Cross-Chain Bridge Fee Optimizer",
              },
              {
                path: "/calculators/CustomizableCryptoWatchlist",
                label: "Customizable Crypto Watchlist",
              },
              {
                path: "/calculators/MarginCalculator",
                label: "MarginCalculator",
              },
              {
                path: "/charts/bitcoin-rainbow-chart",
                label: "Bitcoin Rainbow Chart",
              },
              {
                path: "/charts/ethereum-rainbow-chart",
                label: "Ethereum Rainbow Chart",
              },
              {
                path: "/market/currency-market-24h",
                label: "24h Cryptocurrency Market",
              },
              {
                path: "/market/btc-dominance",
                label: "Bitcoin Dominance Chart",
              },
              {
                path: "/fear-and-greed",
                label: "Fear and Greed Index",
              },
            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* .....................................3...................... */}
        <div className="footer-section">
          <h3 className="section-title">{t("Policies")}</h3>
          <ul className="link-list">
            {[
              { path: "/disclaimer", label: "Disclaimer" },
              { path: "/terms-of-Use", label: "Term of use" },
              { path: "/privacy-policy", label: "Privacy Policy" },
              { path: "/code-of-conduct", label: "Code of Conduct" },

              
              { path: "/cookie-policy", label: "Cookie Policy" },
              { path: "/licensing", label: "Licensing" },

              { path: "/terms-conditions", label: "terms_conditions" },
              { path: "/faq", label: "faq" },
              { path: "/Feedback", label: "Feedback" },
              { path: "/refund-policy", label: "Refund Policy" },
            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* .....................................4...................... */}
        <div className="footer-section">
          <h3 className="section-title">{t("News")}</h3>

          <ul className="link-list">
            {[
              { path: "/what's-trending", label: "What's Trending" },
              { path: "/market-update", label: "Market Updates" },
              { path: "/", label: "Product News" },
              { path: "/", label: "Company News" },

              { path: "/crypto-news", label: "Crypto News" },



            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>




        {/* .....................................5...................... */}
        <div className="footer-section">
          <h3 className="section-title">{t("Support")}</h3>
          <ul className="link-list">
            {[
              { path: "/help-center", label: "Help Center" },
              { path: "/defi-assets", label: "How to track your DeFi Assets" },
              {
                path: "/profit-loss",
                label: "Learn about profit/loss Calculator",
              },

              {
                path: "/crypto-reward",
                label: "Learn about Crypto Tracker Reward",
              },
              { path: "/cryptocard", label: "How to Buy Crypto with Card" },

              {
                path: "/track-nft",
                label: "How to Track NFTs on Crypto Tracker",
              },
              {
                path: "/Methodology",
                label: "Methodology",
              },
            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>



      <div className="footer-nav">
        {footerNavLinks.map((link, index) => (
          <Link key={index} to={link.path} className="footer-link">
            {link.label}
          </Link>
        ))}
        main
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
