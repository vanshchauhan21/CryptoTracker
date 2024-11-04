import React, { useEffect } from 'react';
import image from "../../assets/404.png";
import './NotFoundPage.css';  // Import the CSS file for custom styles
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {


  const navigate = useNavigate();


  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

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
