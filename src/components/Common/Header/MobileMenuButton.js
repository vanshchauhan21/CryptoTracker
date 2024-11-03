import React from 'react';
import './MobileMenuButton.css';

const MobileMenuButton = ({ onClick, isOpen }) => {
  return (
    <button className={`mobile-menu-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MobileMenuButton;