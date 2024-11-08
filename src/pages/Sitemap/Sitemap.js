import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Common/Header";  
import { 
  Home, 
  TrendingUp, 
  Calculator, 
  HelpCircle, 
  Settings, 
  Search,
  Globe,
  Shield,
  CreditCard,
  BookOpen,
  Users,
  DollarSign,
  BarChart,
  Zap,
  Cpu,
  Award,
  Briefcase,
  FileText,
  Layers,
  Bell,
  Smartphone,
  Gift, 
  UserPlus, 
  LogIn, 
  User, 
  AlertCircle, 
  Code 
} from 'lucide-react';
import './Sitemap.css';

const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sitemapSections = [
    {
      title: 'Main Navigation',
      links: [
        { name: 'Home', path: '/', icon: <Home /> },
        { name: 'Dashboard', path: '/dashboard', icon: <TrendingUp /> },
        { name: 'Crypto Prices', path: '/crypto-prices', icon: <Calculator /> },
        { name: 'Market Update', path: '/market-update', icon: <BarChart /> }
      ]
    },
    {
      title: 'Crypto Tools',
      links: [
        { name: 'Crypto Converter', path: '/crypto-converter', icon: <DollarSign /> },
        { name: 'NFT Tracker', path: '/track-nfts', icon: <Layers /> },
        { name: 'Fear and Greed Index', path: '/fear-greed-index', icon: <Zap /> },
        { name: 'Ethereum Rainbow Chart', path: '/ethereum-rainbow', icon: <Globe /> },
        { name: 'Defi Assets', path: '/defi-assets', icon: <Cpu /> }
      ]
    },
    {
      title: 'Learning & Resources',
      links: [
        { name: 'Blog', path: '/blog', icon: <BookOpen /> },
        { name: 'FAQ', path: '/faq', icon: <HelpCircle /> },
        { name: 'Help Center', path: '/help-center', icon: <Shield /> },
        { name: 'Crypto News', path: '/crypto-news', icon: <Bell /> },
        { name: 'Opportunities', path: '/opportunities', icon: <Award /> }
      ]
    },
    {
      title: 'User  Features',
      links: [
        { name: 'Watchlist', path: '/watchlist', icon: <Briefcase /> },
        { name: 'Earn', path: '/earn', icon: <CreditCard /> },
        { name: 'Crypto Rewards', path: '/crypto-rewards', icon: <Gift /> },
        { name: 'Contributors', path: '/contributors', icon: <Users /> }
      ]
    },
    {
      title: 'Account Management',
      links: [
        { name: 'Sign Up', path: '/signup', icon: <User Plus /> },
        { name: 'Login', path: '/login', icon: <LogIn /> },
        { name: 'Profile', path: '/profile', icon: <User  /> }
      ]
    },
    {
      title: 'Legal & Information',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', icon: <Shield /> },
        { name: 'Terms of Use', path: '/terms-of-use', icon: <FileText /> },
        { name: 'Disclaimer', path: '/disclaimer', icon: <AlertCircle /> },
        { name: 'Sitemap', path: '/sitemap', icon: <Layers /> }
      ]
    },
    {
      title: 'Additional Services',
      links: [
        { name: 'Pro/Free Subscription', path: '/subscription', icon: <CreditCard /> },
        { name: 'Mobile App', path: '/mobile-app', icon: <Smartphone /> },
        { name: 'API Documentation', path: '/api-docs', icon: <Code /> }
      ]
    }
  ];

  // Search functionality
  const filteredSections = sitemapSections.map(section => ({
    ...section,
    links: section.links.filter(link => 
      link.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.links.length > 0);

  return (
    <>

    <Header/>
    <div className="sitemap-container">
      <header className="sitemap-header">
        <h1 className="sitemap-title">Comprehensive Sitemap</h1>
        <p className="sitemap-description">
          Navigate through all sections of Crypto Tracker. 
          Discover our tools, resources, and features with ease.
        </p>
        
        <div className="sitemap-search">
          <input
            type="text"
            className="sitemap-search-input"
            placeholder="Search site sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="sitemap-search-icon" />
        </div>
      </header>

      {filteredSections.length > 0 ? (
        <div className="sitemap-grid">
          {filteredSections.map((section, index) => (
            <div className="sitemap-section" key={index}>
              <h2 className="sitemap-section-title">{section.title}</h2>
              <ul className="sitemap-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No sections found matching your search.</p>
        </div>
      )}

      <section className="sitemap-info">
        <h3>About Our Sitemap</h3>
        <p>
          This sitemap provides a comprehensive overview of all pages and 
          sections available on Crypto Tracker. Use the search function 
          to quickly find the section you're looking for.
        </p>
      </section>
    </div>
    </>
  );
};

export default Sitemap;