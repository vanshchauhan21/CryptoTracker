import React from 'react';
import './StartButton.css';

function StartButton() {
  const handleStartClick = () => {
    // Logic to handle button click, for example, redirect to the analysis page
    window.location.href = '/analysis';
  };

  return (
    <button
      type="button"
      className="cs-button__iO2MF tutorialButton__wQg_i large__e7_uP"
      title="Start Analyzing"
      onClick={handleStartClick}
    >
      Start Analyzing
    </button>
  );
}

export default StartButton;
