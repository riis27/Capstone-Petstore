// Registered.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registered.css';

const Registered = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000000000); // redirect after 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="registered-page">
      <div className="registered-box-wrapper"> {/* Created wrapper div for padding */}
        <div className="registered-box">
          <h1>Thank You!</h1>
          <p>Your message has been received. We'll get back to you shortly.</p>
          <p className="small">You'll be automatically redirected to the homepage in a few seconds.</p>
          <button className="registered-button" onClick={handleReturnHome}>
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registered;