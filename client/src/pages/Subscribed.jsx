// Subscribed.jsx
import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Subscribed.css";

const Subscribed = () => {
  return (
    <div className="subscribed-page">
      <div className="subscribed-box-wrapper">
        <div className="subscribed-box">
          <h2>Thank you for subscribing to Pawsh Press! </h2>
          <p>Check your inbox for updates, cuteness, and a special discount.</p>
          <Link to="/home">
            <button className="home-button">Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribed;