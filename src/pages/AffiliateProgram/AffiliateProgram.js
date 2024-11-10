import React, { useState } from 'react';
import Header from '../../components/Common/Header';
import Feedback from '../../components/Feedback/Feedbacksection';
import './AffiliateProgram.css';
import { FaHandshake, FaChartLine, FaMoneyBillWave, FaGift } from 'react-icons/fa';

function AffiliateProgram() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const joinSteps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create an account on Crypto Tracker and navigate to the Affiliate Program section.",
      icon: <FaHandshake />
    },
    {
      step: 2,
      title: "Get Unique Referral Link",
      description: "Receive a personalized referral link to share with your network.",
      icon: <FaChartLine />
    },
    {
      step: 3,
      title: "Promote",
      description: "Share your link through social media, blogs, videos, or other channels.",
      icon: <FaMoneyBillWave />
    },
    {
      step: 4,
      title: "Earn Commissions",
      description: "Receive commissions for each successful referral and subscription.",
      icon: <FaGift />
    }
  ];

  const commissionStructure = [
    {
      type: "Subscription Referral",
      rate: "20% of first-year subscription",
      details: "Earn a significant commission for each new Pro or Lifetime Pro subscription"
    },
    {
      type: "Recurring Referral",
      rate: "10% annually",
      details: "Continue earning as long as the referred user maintains their subscription"
    }
  ];

  const benefits = [
    {
      title: "Attractive Commissions",
      description: "Competitive commission rates that reward your efforts in promoting Crypto Tracker.",
      icon: <FaMoneyBillWave />
    },
    {
      title: "Real-Time Tracking",
      description: "Access a dashboard to monitor your referrals, clicks, and earnings in real-time.",
      icon: <FaChartLine />
    },
    {
      title: "Flexible Payouts",
      description: "Choose from multiple payout options including cryptocurrency or bank transfer.",
      icon: <FaHandshake />
    },
    {
      title: "Marketing Support",
      description: "Receive marketing materials, graphics, and content to help you promote effectively.",
      icon: <FaGift />
    }
  ];

  const faqItems = [
    {
      question: "How do I get paid?",
      answer: "Commissions are paid monthly via your chosen payment method once you reach the minimum payout threshold."
    },
    {
      question: "Is there a cost to join?",
      answer: "No, the Crypto Tracker Affiliate Program is completely free to join."
    },
    {
      question: "Are there any restrictions?",
      answer: "Affiliates must comply with our terms of service and cannot use spam or unethical marketing practices."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="affiliate-program-container">
        {/* Program Overview */}
        <section className="affiliate-header">
          <h1>Crypto Tracker Affiliate Program</h1>
          <p>Turn your crypto knowledge into earnings! Join our affiliate program and get rewarded for spreading the word about Crypto Tracker.</p>
          <div className="call-to-action">
            <strong>Start Earning Today - No Technical Skills Required!</strong>
          </div>
        </section>

        {/* Join Steps */}
        <section className="section">
          <h2>How to Join</h2>
          <div className="steps-grid">
            {joinSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3>Step {step.step}: {step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commission Structure */}
        <section className="section">
          <h2>Commission Structure</h2>
          <table className="commission-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Rate</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {commissionStructure.map((commission, index) => (
                <tr key={index}>
                  <td>{commission.type}</td>
                  <td>{commission.rate}</td>
                  <td>{commission.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Key Benefits */}
        <section className="section">
          <h2>Key Benefits for Partners</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

       
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h4 
                onClick={() => toggleFAQ(index)}
                className={activeQuestion === index ? 'active' : ''}
              >
                {item.question}
                <span className="faq-toggle">
                  {activeQuestion === index ? '−' : '+'}
                </span>
              </h4>
              {activeQuestion === index && <p>{item.answer}</p>}
            </div>
          ))}
        </section>

       
        <section className="cta-section">
          <h2>Ready to Become a Crypto Tracker Affiliate?</h2>
          <p>Join our program today and start earning passive income by sharing your passion for crypto!</p>
          <button className="cta-button">Apply Now</button>
        </section>

        <Feedback />
      </div>
    </>
  );
}

export default AffiliateProgram;