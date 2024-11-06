
import React, { useState } from 'react';
import './Feedbacksection.css';

const Feedback = ({ pageName }) => {
  const [feedback, setFeedback] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (isHelpful) => {
    setFeedback(isHelpful);
    setSubmitted(true);
    
  
    console.log(`Feedback for ${pageName}: ${isHelpful ? 'Helpful' : 'Not Helpful'}`);
  };

  if (submitted) {
    return (
      <div className="feedback-container">
        <p className="feedback-thankyou">
          {feedback 
            ? "Thank you for your feedback! We're glad this was helpful! 🎉" 
            : "Thank you for your feedback! We'll work on making this better! 🚀"}
        </p>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h3>Did this answer your question?</h3>
      </div>
      <div className="feedback-buttons">
        <button 
          className="feedback-button"
          onClick={() => handleFeedback(true)}
        >
          <span className="emoji">😊</span>
          <span>Yes, it helped!</span>
        </button>
        <button 
          className="feedback-button"
          onClick={() => handleFeedback(false)}
        >
          <span className="emoji">😕</span>
          <span>No, not really</span>
        </button>
      </div>
    </div>
  );
};

export default Feedback;