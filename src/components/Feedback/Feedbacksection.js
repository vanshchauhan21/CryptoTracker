import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Feedbacksection.css';

const Feedback = ({ pageName }) => {
  const [feedback, setFeedback] = useState(null);
  const [detailedFeedback, setDetailedFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitFeedback = (wasHelpful) => {
    setFeedback(wasHelpful);
    console.log(`Feedback for ${pageName}: ${wasHelpful ? 'Helpful' : 'Not Helpful'}`);
  };

  const handleSubmitDetails = () => {
    setIsSubmitted(true);
    console.log(`Detailed Feedback: ${detailedFeedback}`);
    console.log(`Category: ${category}`);
  };

  return (
    <div className="feedback-container">
      {isSubmitted ? (
        <p className="feedback-thankyou">
          Thank you for your valuable feedback! We appreciate your input. 🎉
        </p>
      ) : (
        <>
          <div className="feedback-header">
            <h3>Did this answer your question?</h3>
          </div>
          <div className="feedback-buttons">
            <button
              className="feedback-button"
              onClick={() => submitFeedback(true)}
            >
              <span className="emoji">😊</span>
              <span>Yes, it helped!</span>
            </button>
            <button
              className="feedback-button"
              onClick={() => submitFeedback(false)}
            >
              <span className="emoji">😕</span>
              <span>No, not really</span>
            </button>
          </div>
          <div className="feedback-details">
            <h4>We'd love to hear more from you:</h4>
            <label>
              Feedback Category:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Detailed Feedback:
              <textarea
                value={detailedFeedback}
                onChange={(e) => setDetailedFeedback(e.target.value)}
                placeholder="Describe your experience or suggestions here..."
              />
            </label>
            <button
              className="submit-button"
              onClick={handleSubmitDetails}
            >
              Submit Feedback
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Prop type validation
Feedback.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Feedback;