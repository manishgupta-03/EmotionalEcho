import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/main"); // Replace with your main app route
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="main-title">EmotionalEcho</h1>
        <p className="welcome-subtitle">
          Discover music, movies, and more that resonate with your mood.
        </p>
        <button className="welcome-buttons button-29" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
