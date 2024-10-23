import React from 'react';
import image from "../../assets/404.png";
import './NotFoundPage.css';  // Import the CSS file for custom styles

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img
          src={image}
          alt="Blockchain 404"
          className="not-found-image"
        />
        
        <h1 className="not-found-heading">
          Oops!!! Page not found.
        </h1>

        <a
          href="/"
          className="not-found-link"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
