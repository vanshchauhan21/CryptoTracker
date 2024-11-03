// src/components/Common/ProgressBar/ProgressBar.js
import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far the user has scrolled
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${scrollPx / winHeightPx * 100}%`;
      
      setScrollProgress(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar" 
        style={{ width: scrollProgress }}
      />
    </div>
  );
};

export default ProgressBar;